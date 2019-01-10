package chris.se;

import chris.se.entity.KeyWord;
import chris.se.entity.Patient;
import chris.se.repository.KeyWordRepository;
import chris.se.repository.PatientRepository;
import chris.se.entity.Utils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

//@Configuration
@Slf4j
public class InitFakeData {

//    @Bean
    CommandLineRunner initDatabase(PatientRepository patientRepository, KeyWordRepository keyWordRepository) {
        return args -> {
            List<String[]> data = new ArrayList<>();
            data.add(new String[]{"Alice", "false", "111111"});
            data.add(new String[]{"Bob", "true", "222222"});
            data.add(new String[]{"Cade", "true", "333333"});
            data.add(new String[]{"Dabria", "false", "444444"});
            data.add(new String[]{"Eagle", "true", "555555"});
            data.add(new String[]{"Fabia", "false", "666666"});
            data.add(new String[]{"Gable", "true", "777777"});
            data.add(new String[]{"Halle", "false", "888888"});
            data.add(new String[]{"Ianthe", "false", "999999"});

            data.forEach(elem -> log.info("Preloading Patient " + patientRepository.save(
                    new Patient(elem[0],
                            elem[1].equals("true") ? Utils.MALE : Utils.FEMALE,
                             elem[2], Long.valueOf(elem[2]), Long.valueOf(elem[2]))
                    )));

            data.forEach(elem -> log.info("Preloading keyword " + keyWordRepository.save(
                    new KeyWord(elem[0],
                            elem[1].equals("true") ? Utils.MALE : Utils.FEMALE,
                            elem[2], elem[2], elem[2]))));
        };
    }
}
