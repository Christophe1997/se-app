package chris.se.exception;

public class PatientNotFoundException extends RuntimeException {

    public PatientNotFoundException(Long id) {
        super("Could not find patient " + id);
    }
}
