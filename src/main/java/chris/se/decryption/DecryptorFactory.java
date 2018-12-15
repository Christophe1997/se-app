package chris.se.decryption;

public class DecryptorFactory<S, T> {

    public Decryptor<T, T> getDefaultDecryptor() {
        return new IdentityDecryptor<>();
    }

    // TODO
    // add getDecryptor
}
