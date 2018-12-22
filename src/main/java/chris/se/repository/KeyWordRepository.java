package chris.se.repository;

import chris.se.entity.KeyWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface KeyWordRepository extends JpaRepository<KeyWord, Long> {

    @Query("select t from KeyWord t where (:name is null or t.name = :name) " +
            "and (:gender is null or t.gender = :gender) " +
            "and (:visitCardNumber is null or t.visitCardNumber = :visitCardNumber) " +
            "and (:outpatientNumber is null or t.outpatientNumber = :outpatientNumber) " +
            "and (:admissionNumber is null or t.admissionNumber = :admissionNumber) ")
    List<KeyWord> findByMultipleCondition(
            @Param(value = "name") String name,
            @Param(value = "gender") Boolean gender,
            @Param(value = "visitCardNumber") String visitCardNumber,
            @Param(value = "outpatientNumber") String outpatientNumber,
            @Param(value = "admissionNumber") String admissionNumber);
}
