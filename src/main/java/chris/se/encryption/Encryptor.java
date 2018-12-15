package chris.se.encryption;

/**
 * An encryptor encrypt source to target
 * @param <S> source class
 * @param <T> target class
 */
public interface Encryptor<S, T> {

    T encrypt(S source);

}
