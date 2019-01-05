package chris.se.encryption;

/**
 * <p>An encryptor encrypt source to target</p>
 * @param <S> source class
 * @param <T> target class
 */
public interface Encryptor<S, T> {

    /**
     * @param source source plaintext
     * @return The target ciphertext
     */
    T encrypt(S source) throws Exception;

}
