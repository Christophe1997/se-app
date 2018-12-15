package chris.se.repository;

import chris.se.entity.KeyWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface KeyWordRepository extends JpaRepository<KeyWord, Long> {

    @Query("select t from KeyWord t where (t.name = :name or :name is null) " +
            "and (t.gender = :gender or :gender is null) " +
            "and (t.visitCardNumber = :visitCardNumber or : visitCardNumber is null) " +
            "and (t.outpatientNumber = :outpatientNumber or :outpatientNumber is null) " +
            "and (t.admissionNumber = :admissionNumber or :admissionNumber is null) ")
    List<KeyWord> findByMultipleCondition(
            @Param(value = "name") String name,
            @Param(value = "gender") Boolean gender,
            @Param(value = "visitCardNumber") String visitCardNumber,
            @Param(value = "outpatientNumber") String outpatientNumber,
            @Param(value = "admissionNumber") String admissionNumber);
}
