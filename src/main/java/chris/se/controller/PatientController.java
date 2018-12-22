package chris.se.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
import static org.springframework.beans.BeanUtils.copyProperties;

import chris.se.entity.Patient;
import chris.se.exception.PatientNotFoundException;
import chris.se.repository.PatientRepository;
import chris.se.resourceAssembler.PatientResourceAssembler;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class PatientController {

    private final PatientRepository repository;
    private final PatientResourceAssembler assembler;

    public PatientController(PatientRepository repository,
                             PatientResourceAssembler assembler) {

        this.repository = repository;
        this.assembler = assembler;

    }

    @GetMapping("/patients/{id}")
    public Resource<Patient> one(@PathVariable Long id) {

        Patient patient = repository.findById(id)
                .orElseThrow(() -> new PatientNotFoundException(id));

        return assembler.toResource(patient);

    }

    @GetMapping("/patients")
    public Resources<Resource<Patient>> all() {

        List<Resource<Patient>> patients = repository.findAll().stream()
                .map(assembler::toResource)
                .collect(Collectors.toList());

        return new Resources<>(patients,
                linkTo(methodOn(PatientController.class).all()).withSelfRel());

    }

    @PostMapping("/patients")
    ResponseEntity<?> newPatient(@RequestBody Patient newPatient) throws URISyntaxException {
        Resource<Patient> resource = assembler.toResource(repository.save(newPatient));

        return ResponseEntity
                .created(new URI(resource.getId().expand().getHref()))
                .body(resource);

    }

    @PutMapping("/patients/{id}")
    ResponseEntity<?> replacePatient(@RequestBody Patient newPatient,
                                     @PathVariable Long id) throws URISyntaxException {

        Patient updatedPatient = repository.findById(id)
                .map(patient -> {
                    copyProperties(newPatient, patient);
                    patient.setId(id);
                    return repository.save(patient);
                })
                .orElseGet(() -> {
                    newPatient.setId(id);
                    return repository.save(newPatient);
                });

        Resource<Patient> resource = assembler.toResource(updatedPatient);

        return ResponseEntity
                .created(new URI(resource.getId().expand().getHref()))
                .body(resource);
    }

    @DeleteMapping("/patients/{id}")
    ResponseEntity<?> deletePatient(@PathVariable Long id) {

        repository.deleteById(id);

        return ResponseEntity.noContent().build();

    }
}
