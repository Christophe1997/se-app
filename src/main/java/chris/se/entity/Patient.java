package chris.se.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

/**
 * <p>Table patient</p>
 * TODO: Add table name and column name
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "病人信息")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "病人ID")
    private Long id;

    @Column(name = "姓名") private String name; // 姓名
    @Column(name = "性别") private String gender; // 性别
    @Column(name = "年龄") private String age; // 年龄
    @Column(name = "出生日期") private Date birthday; // 生日
    @Column(name = "出生地点") private String birthplace; // 出生地
    @Column(name = "身份证号") private String identityNumber; // 身份证号
    @Column(name = "其他证件") private String otherPaper; // 其他证件

    @Column(name = "门诊号") private Long outpatientNumber; // 门诊号
    @Column(name = "住院号") private Long admissionNumber; // 住院号
    @Column(name = "就诊卡号") private String visitCardNumber; // 就诊卡号
    @Column(name = "卡验证码") private String cardVerficationCode; // 卡验证码
    @Column(name = "费别") private String costCategory; // 费别
    @Column(name = "医疗付款方式") private String paymentMethod; // 付款方式

    @Column(name = "身份") private String position; // 身份
    @Column(name = "职业") private String profession; // 职业
    @Column(name = "民族") private String nation; // 民族
    @Column(name = "国籍") private String nationality; // 国籍
    @Column(name = "区域") private String area; // 区域
    @Column(name = "学历") private String educationBackground; // 学历
    @Column(name = "婚姻状况") private String maritalStatus; // 婚姻状况
    @Column(name = "家庭地址") private String houseAddress; // 家庭地址
    @Column(name = "家庭电话") private String homeTelephone; // 家庭电话
    @Column(name = "家庭地址邮编") private String houseZipCode; // 家庭地址邮编

    @Column(name = "监护人") private String guardian; // 监护人
    @Column(name = "联系人姓名") private String contactName; // 联系人姓名
    @Column(name = "联系人关系") private String contactRelation; // 联系人关系
    @Column(name = "联系人地址") private String contactHouseAddress; // 联系人地址
    @Column(name = "联系人电话") private String contactPhoneNumber; // 联系人电话

    @Column(name = "合同单位ID") private String contractCompanyId; // 合同单位ID
    @Column(name = "工作单位") private String workCompany; // 工作单位
    @Column(name = "单位电话") private String companyPhoneNumber; // 单位电话
    @Column(name = "单位邮编") private String companyZipCode; // 单位邮编
    @Column(name = "单位开户行") private String companyDepisitBank; // 单位开户行
    @Column(name = "单位账号") private String companyAccount; // 单位账号

    @Column(name = "担保人") private String guarantee; // 担保人
    @Column(name = "担保额") private Long guaranteedAmount; // 担保额
    @Column(name = "担保性质") private Boolean guaranteedProperty; // 担保性质

    @Column(name = "就诊时间") private Date visitTime; // 就诊时间
    @Column(name = "就诊状态") private Boolean visitStatus; // 就诊状态
    @Column(name = "就诊诊室") private String visitRoom; // 就诊诊室
    @Column(name = "住院次数") private Short hospitalizationTimes; // 住院次数
    @Column(name = "当前科室ID") private Long presentRoomId; // 当前科室ID
    @Column(name = "当前病区ID") private Long presentInpatientArea; // 当前病区ID
    @Column(name = "当前床号") private String presentBedNumber; // 当前床号
    @Column(name = "入院时间") private Date admissionTime; // 入院时间
    @Column(name = "住院时间") private Timestamp lengthOfStay; // 住院时间
    @Column(name = "出院时间") private Date outTime; // 出院时间
    @Column(name = "在院") private Boolean ishospitalization; // 在院

    @Column(name = "IC卡号") private String icNumber; // IC卡号
    @Column(name = "健康号") private String healthNumber; // 健康号
    @Column(name = "医保号") private String medicareNumber; // 医保号
    @Column(name = "险类") private Short insuranceCategiry; // 险类
    @Column(name = "登记时间") private Date registrationTime; // 登记时间
    @Column(name = "停用时间") private Date downTime; // 停用时间
    @Column(name = "锁定") private Boolean locked; // 锁定
    @Column(name = "户口邮编") private String residenceZipCode; // 户口邮编
    @Column(name = "户口地址") private String residenceLocation; // 户口地址
    @Column(name = "户口地址邮编") private String residenceLocationZipCode; // 户口地址邮编
    @Column(name = "籍贯") private String nativePlace; // 籍贯
    @Column(name = "EMAIL") private String email; // EMAIL
    @Column(name = "QQ") private String qqNumber; // QQ
    @Column(name = "联系人身份证号") private String contactIdNumber; // 联系人身份证号

    public Patient(String name,
                   String gender,
                   String visitCardNumber,
                   Long outpatientNumber,
                   Long admissionNumber) {
        this.name = name;
        this.gender = gender;
        this.visitCardNumber = visitCardNumber;
        this.outpatientNumber = outpatientNumber;
        this.admissionNumber = admissionNumber;
    }
}
