package chris.se.encryption;

/**
 * <p>Identity encryptor</p>
 * It return the source directly
 * @param <S> source class
 */
public class IdentityEncryptor<S> implements Encryptor<S, S> {

    @Override
    public S encrypt(S source) {
        return source;
    }

}
