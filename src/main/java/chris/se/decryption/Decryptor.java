package chris.se.decryption;

/**
 * A decryptor decrypt target to source
 * @param <S> source class
 * @param <T> target class
 */
public interface Decryptor<S, T> {

    S decrypt(T target);

}
