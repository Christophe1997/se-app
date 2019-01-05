package chris.se.entity;

/**
 * <p>Utils for entity</p>
 * for example, you should alwasy use {@code Utils.FEMALE} for female
 */
public class Utils {

    public static final String FEMALE = "女";
    public static final String MALE = "男";

    /**
     * <p>Convert {@link chris.se.entity.KeyWord} id to {@link chris.se.entity.Patient} id</p>
     * @param keyWordId An id for {@link chris.se.entity.KeyWord}
     * @return An id for {@link chris.se.entity.Patient} whether it exists or not.
     */
    public static Long keyWordToPatient(Long keyWordId) {
        return keyWordId - 9;
    }

}
