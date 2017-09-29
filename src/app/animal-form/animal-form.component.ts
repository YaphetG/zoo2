import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ZooService } from '../services/animal-zoo.service';
import { Animal, CLASSES } from '../models/animal.model';

@Component({
    selector: 'animal-form',
    templateUrl: './animal-form.component.html',
    styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent {

    zooService: ZooService;
    animal: Animal;
    formBuilder: FormBuilder;
    animalForm: FormGroup;
    animalClasses = CLASSES;
    router: Router;
    errors: any;

    constructor(zooService: ZooService, formBuilder: FormBuilder, router: Router) {
        this.zooService = zooService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.createForm();
    }

    // creates the form
    private createForm() {
        this.animalForm = this.formBuilder.group({
            name: ['', this.uniqueNameValidator(this.zooService)],
            avgHeight: '',
            avgWeight: '',
            class: '',
            description: '',
            imgPath: '',
            quantity: '',
        });
    }
    // calls the service to check if an animal with the same name is already there

    private uniqueNameValidator(service): ValidatorFn {
        const animal = service.findByName(name);
        console.log( 'validator called');
        return (control: AbstractControl): {[key: string]: any} => {
            const exists = animal != null;
            return exists ? {'uniqueName': {value: control.value}} : null;
        };

    }

    public checkAndSave() {
        // for some reason the validtion is not working :S
        if (this.animalForm.valid) {
            this.zooService.save(this.animalForm.value);
            this.router.navigate(['index']);
        }else {
            this.errors = this.animalForm.errors;
        }
        console.log(this.animalForm);
    }
}


