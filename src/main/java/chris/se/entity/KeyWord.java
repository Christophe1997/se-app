package chris.se.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * <p>Table keyword</p>
 * TODO: Add table name and column name
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class KeyWord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name; // 姓名
    private String gender; // 性别

    private String visitCardNumber; // 就诊卡号
    private String outpatientNumber; // 门诊号
    private String admissionNumber; // 住院号

    public KeyWord(String name,
                   String gender,
                   String visitCardNumber,
                   String outpatientNumber,
                   String admissionNumber) {
        this.name = name;
        this.gender = gender;
        this.visitCardNumber = visitCardNumber;
        this.outpatientNumber = outpatientNumber;
        this.admissionNumber = admissionNumber;
    }
}
