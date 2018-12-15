package chris.se.resourceAssembler;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import chris.se.controller.PatientController;
import chris.se.entity.Patient;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

@Component
public class PatientResourceAssembler implements ResourceAssembler<Patient, Resource<Patient>> {

    @Override
    public Resource<Patient> toResource(Patient patient) {
        return new Resource<>(patient,
                linkTo(methodOn(PatientController.class).one(patient.getId())).withSelfRel(),
                linkTo(methodOn(PatientController.class).all()).withRel("patients"));
    }

}
