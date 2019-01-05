package chris.se.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import chris.se.decryption.Decryptor;
import chris.se.decryption.DecryptorFactory;
import chris.se.encryption.Encryptor;
import chris.se.encryption.EncryptorFactory;
import chris.se.entity.Patient;
import chris.se.entity.Utils;
import chris.se.exception.EncryptFailure;
import chris.se.exception.PatientNotFoundException;
import chris.se.repository.KeyWordRepository;
import chris.se.repository.PatientRepository;
import chris.se.resourceAssembler.PatientResourceAssembler;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class KeyWordController {

    private final KeyWordRepository keyWordRepository;
    private final PatientRepository patientRepository;
    private final PatientResourceAssembler assembler;
    private final EncryptorFactory<String, String> factory = new EncryptorFactory<>();
    private @Value("${cryptogram.secret}") String secret;

    public KeyWordController(KeyWordRepository keyWordRepository,
                             PatientRepository patientRepository,
                             PatientResourceAssembler assembler) {

        this.keyWordRepository = keyWordRepository;
        this.patientRepository = patientRepository;
        this.assembler = assembler;

    }

    @GetMapping("/patients/keyword")
    public Resources<Resource<Patient>> filter(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "gender", required = false) String gender,
            @RequestParam(value = "visitCardNumber", required = false) String visitCardNumber,
            @RequestParam(value = "outpatientNumber", required = false) String outpatientNumber,
            @RequestParam(value = "admissionNumber", required = false) String addmissionNumber) {

        Encryptor<String, String> encryptor = factory.getSm4Encryptor(secret);
        List<Resource<Patient>> patients;
        try {
             patients = keyWordRepository.findByMultipleCondition(
                    encryptor.encrypt(name),
                    encryptor.encrypt(gender),
                    encryptor.encrypt(visitCardNumber),
                    encryptor.encrypt(outpatientNumber),
                    encryptor.encrypt(addmissionNumber)).stream()
                    .map(keyWord ->
                            assembler.toResource(
                                    patientRepository.findById(Utils.keyWordToPatient(keyWord.getId()))
                                            .orElseThrow(() -> new PatientNotFoundException(keyWord.getId()))
                            )
                    ).collect(Collectors.toList());
        } catch (Exception ex) {
            throw new EncryptFailure(ex.getMessage());
        }

        return new Resources<>(patients,
                linkTo(methodOn(KeyWordController.class)
                        .filter(name, gender, visitCardNumber, outpatientNumber, addmissionNumber)).withSelfRel());

    }

}
