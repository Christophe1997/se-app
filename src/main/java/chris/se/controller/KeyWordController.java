package chris.se.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import chris.se.entity.Patient;
import chris.se.entity.Utils;
import chris.se.exception.PatientNotFoundException;
import chris.se.repository.KeyWordRepository;
import chris.se.repository.PatientRepository;
import chris.se.resourceAssembler.PatientResourceAssembler;
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
            @RequestParam(value = "gender", required = false) Boolean gender,
            @RequestParam(value = "visitCardNumber", required = false) String visitCardNumber,
            @RequestParam(value = "outpatientNumber", required = false) String outpatientNumber,
            @RequestParam(value = "admissionNumber", required = false) String addmissionNumber) {

        List<Resource<Patient>> patients = keyWordRepository.findByMultipleCondition(name, gender, visitCardNumber,
                outpatientNumber, addmissionNumber).stream()
                .map(keyWord ->
                        assembler.toResource(
                                patientRepository.findById(Utils.keyWordToPatient(keyWord.getId()))
                                        .orElseThrow(() -> new PatientNotFoundException(keyWord.getId()))
                        )
                ).collect(Collectors.toList());

        return new Resources<>(patients,
                linkTo(methodOn(KeyWordController.class)
                        .filter(name, gender, visitCardNumber, outpatientNumber, addmissionNumber)).withSelfRel());

    }

}
