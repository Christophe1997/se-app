package chris.se.encryption;

public class IdentityEncryptor<S> implements Encryptor<S, S> {

    @Override
    public S encrypt(S source) {
        return source;
    }

}
