package chris.se.encryption;

/**
 * <p>Encryptor factory dispatch encryptor</p>
 * @param <S> source class
 * @param <T> target class
 */
public class EncryptorFactory<S, T> {

    /**
     * <p>Get the default encryptor</p>
     * @return The identity encryptor of {@link chris.se.encryption.IdentityEncryptor}
     * @since 0.0.1
     */
    public Encryptor<S, S> getDefaultEncryptor() {
        return new IdentityEncryptor<>();
    }

    /**
     * <p>Get the SM4 Encryptor</p>
     * @param secret secret key
     * @return SM4 encryptor with given key
     */
    public Encryptor<String, String> getSm4Encryptor(String secret) {
        return new Sm4Encryptor(secret);
    }

}
