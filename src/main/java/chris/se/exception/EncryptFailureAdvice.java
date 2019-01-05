package chris.se.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class EncryptFailureAdvice {

    @ResponseBody
    @ExceptionHandler(EncryptFailure.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String EncryptFailureHandler(EncryptFailure ex) {
        return ex.getMessage();
    }
}
