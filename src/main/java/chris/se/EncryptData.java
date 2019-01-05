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

@Configuration
@Slf4j
public class EncryptData {

    private @Value("${cryptogram.secret}")
    String secret;
    private final EncryptorFactory<String, String> factory = new EncryptorFactory<>();

    @Bean
    CommandLineRunner encryptData(PatientRepository patientRepository,
                                  KeyWordRepository keyWordRepository) {
        Encryptor<String, String> encryptor = factory.getSm4Encryptor(secret);
        return args -> {
            patientRepository.findAll()
                    .forEach(patient -> {
                        log.info("Encrypt patient" + patient.getId());
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
                            System.exit(1);
                        }
                    });
            log.info("Encryption finished");
        };
    }
}
