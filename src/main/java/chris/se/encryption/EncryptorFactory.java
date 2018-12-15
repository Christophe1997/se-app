package chris.se.encryption;

public class EncryptorFactory<S, T> {

    public Encryptor<S, S> getDefaultEncryptor() {
        return new IdentityEncryptor<>();
    }

    // TODO
    // add getEncryptor.
}
