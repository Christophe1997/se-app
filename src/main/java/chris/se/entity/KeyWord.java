package chris.se.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class KeyWord {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name; // 姓名
    private Boolean gender; // 性别

    private String visitCardNumber; // 就诊卡号
    private String outpatientNumber; // 门诊号
    private String admissionNumber; // 住院号

}
