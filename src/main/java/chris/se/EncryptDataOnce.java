package chris.se;

import chris.se.encryption.Encryptor;
import chris.se.encryption.EncryptorFactory;
import chris.se.entity.KeyWord;
import chris.se.repository.KeyWordRepository;
import chris.se.repository.PatientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

//@Configuration
@Slf4j
public class EncryptDataOnce {

    private @Value("${cryptogram.secret}")
    String secret;
    private final EncryptorFactory<String, String> factory = new EncryptorFactory<>();

//    @Bean(destroyMethod = "")
    CommandLineRunner encryptData(PatientRepository patientRepository,
                                  KeyWordRepository keyWordRepository) {
        Encryptor<String, String> encryptor = factory.getSm4Encryptor(secret);
        return args -> {
            log.info("Start encryption");
            patientRepository.findAll()
                    .forEach(patient -> {
                        log.info("Encrypt patient: " + patient.getId() + "|" + patient.getName());
                        try {
                            keyWordRepository.save(new KeyWord(
                                    patient.getId(),
                                    encryptor.encrypt(patient.getName()),
                                    encryptor.encrypt(patient.getGender()),
                                    encryptor.encrypt(String.valueOf(patient.getVisitCardNumber())),
                                    encryptor.encrypt(String.valueOf(patient.getOutpatientNumber())),
                                    encryptor.encrypt(String.valueOf(patient.getAdmissionNumber()))
                            ));
                        } catch (Exception ex) {
                            log.warn("Encrypted failed with " + patient.getId() + ": " + ex.getMessage());
                        }
                    });
            log.info("Encryption finished");
        };
    }
}
