package chris.se.decryption;

/**
 * <p>Decryptor factory dispatch encryptor</p>
 * @param <S> source class
 * @param <T> target class
 */
public class DecryptorFactory<S, T> {

    /**
     * <p>Get the default decryptor</p>
     * @return The identity decryptor of {@link chris.se.decryption.IdentityDecryptor}
     * @since 0.0.1
     */
    public Decryptor<T, T> getDefaultDecryptor() {
        return new IdentityDecryptor<>();
    }

    /**
     * <p>Get the SM4 Decryptor</p>
     * @param secret secret key
     * @return SM4 decryptor with given key
     */
    public Decryptor<String, String> getSm4Decryptor(String secret) {
        return new Sm4Decryptor(secret);
    }
}
