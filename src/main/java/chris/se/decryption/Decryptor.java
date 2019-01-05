package chris.se.decryption;

/**
 * <p>A decryptor decrypt target to source</p>
 * @param <S> source class
 * @param <T> target class
 */
public interface Decryptor<S, T> {

    /**
     * @param target target ciphertext
     * @return The source plaintext
     */
    S decrypt(T target) throws Exception;

}
