package chris.se.encryption;

import java.security.Security;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.bouncycastle.jce.provider.BouncyCastleProvider;

/**
 * SM4 encryptor
 */
public class Sm4Encryptor implements Encryptor<String, String> {

    private byte[] key;

    Sm4Encryptor(String key) {
        this.key = Base64.getDecoder().decode(key);
    }

    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    private static final String CIPHER_ALGORITHM = "SM4/ECB/PKCS5Padding";

    private SecretKey toKey(byte[] key){

        return new SecretKeySpec(key,"SM4");
    }

    @Override
    public String encrypt(String source) throws Exception {
        // 还原密钥
        SecretKey k = toKey(key);

        // 实例化Cipher类
        Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);

        // 设置Cipher为加密模式
        cipher.init(Cipher.ENCRYPT_MODE, k);

        byte[] byte_Data = source.getBytes();
        byte[] endata = cipher.doFinal(byte_Data);
        return Base64.getEncoder().encodeToString(endata);

    }
}
