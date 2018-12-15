package chris.se.decryption;

public class IdentityDecryptor<T> implements Decryptor<T, T> {

    @Override
    public T decrypt(T target) {
        return target;
    }

}
