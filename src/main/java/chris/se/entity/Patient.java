package chris.se.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name; // 姓名
    private Boolean gender; // 性别
    private Integer age; // 年龄
    private @Temporal(TemporalType.TIMESTAMP) Date birthday; // 生日
    private String birthplace; // 出生地
    private String identityNumber; // 身份证号

    private String outpatientNumber; // 门诊号
    private String admissionNumber; // 住院号
    private String visitCardNumber; // 就诊卡号
    private String cardVerficationCode; // 卡验证码
    private String costCategory; // 费别
    private String paymentMethod; // 付款方式
    private String otherPaper; // 其他证件

    private String position; // 身份
    private String profession; // 职业
    private String nation; // 民族
    private String nationality; // 国籍
    private String area; // 区域
    private String educationBackground; // 学历
    private String maritalStatus; // 婚姻状况
    private String houseAddress; // 家庭地址
    private String homeTelephone; // 家庭电话
    private String houseZipCode; // 家庭地址邮编

    private String guardian; // 监护人
    private String contactName; // 联系人姓名
    private String contactRelation; // 联系人关系
    private String contactHouseAddress; // 联系人地址
    private String contactPhoneNumber; // 联系人电话

    private String contractCompanyId; // 合同单位ID
    private String workCompany; // 工作单位
    private String companyPhoneNumber; // 单位电话
    private String companyZipCode; // 单位邮编
    private String companyDepisitBank; // 单位开户行
    private String companyAccount; // 单位账号

    private String guarantee; // 担保人
    private Long guaranteedAmount; // 担保额
    private String guaranteedProperty; // 担保性质

    private String visitTime; // 就诊时间
    private String visitStatus; // 就诊状态
    private String visitRoom; // 就诊诊室
    private String hospitalizationTimes; // 住院次数
    private String presentRoomId; // 当前科室ID
    private String presentInpatientArea; // 当前病区ID
    private String presentBedNumber; // 当前床号
    private @Temporal(TemporalType.TIMESTAMP) Date admissionTime; // 入院时间
    private @Temporal(TemporalType.TIMESTAMP) Date lengthOfStay; // 住院时间
    private String ishospitalization; // 在院

    private String icNumber; // IC卡号
    private String healthNumber; // 健康号
    private String medicareNumber; // 医保号
    private String insuranceCategiry; // 险类
    private @Temporal(TemporalType.TIMESTAMP) Date registrationTime; // 登记时间
    private @Temporal(TemporalType.TIMESTAMP) Date downTime; // 停用时间

}
