package chris.se.exception;

public class EncryptFailure extends RuntimeException {

    public EncryptFailure(String msg) {
        super("Encrypt failed: " + msg);
    }
}
