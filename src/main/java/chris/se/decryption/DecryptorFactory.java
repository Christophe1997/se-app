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

    // TODO
    // add getDecryptor
}
