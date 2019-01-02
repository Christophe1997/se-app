package chris.se.decryption;

/**
 * <p>Identity decryptor</p>
 * It return the target directly
 * @param <T> target class
 */
public class IdentityDecryptor<T> implements Decryptor<T, T> {

    @Override
    public T decrypt(T target) {
        return target;
    }

}
