package chris.se.decryption;

import java.security.Security;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.bouncycastle.jce.provider.BouncyCastleProvider;

/**
 * SM4 decryptor
 */
public class Sm4Decryptor implements Decryptor<String, String> {
    private byte[] key;

    /**
     * 构造器
     * @param key 密钥
     */
    Sm4Decryptor(String key) {
        this.key = Base64.getDecoder().decode(key);
    }

    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    /**
     * 设置加解密模式
     *
     */
    private static final String CIPHER_ALGORITHM = "SM4/ECB/PKCS5Padding";

    private SecretKey toKey(byte[] key){

        return new SecretKeySpec(key,"SM4");
    }

    @Override
    public String decrypt(String target) throws Exception {
        // 还原密钥
        SecretKey k = toKey(key);
        // 实例化Cipher类
        Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
        // 设置Cipher为解密模式
        cipher.init(Cipher.DECRYPT_MODE, k);

        byte[] enData = Base64.getDecoder().decode(target);
        byte[] deData = cipher.doFinal(enData);
        return new String(deData);
    }
}
