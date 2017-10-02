import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
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
        console.log(this.animalForm);
    }

    // creates the form
    private createForm() {
        this.animalForm = this.formBuilder.group({
            name: ['', Validators.compose([this.uniqueNameValidator(), Validators.required])],
            avgHeight: ['', Validators.required],
            avgWeight: ['', Validators.required],
            class: ['', Validators.required],
            description: ['', Validators.required],
            imgPath: ['', Validators.required],
            quantity: ['', Validators.required],
        });
    }
    // calls the service to check if an animal with the same name is already there

    // Should not change to a verb  like `validateUniqueName()` because angular requires it like this
    // or I wont be able to access it from the template as I did for the error div (line 7 on animal-form template)
    private uniqueNameValidator(): ValidatorFn {
            return  (control: AbstractControl): {[key: string]: any} => {
                const animal = this.zooService.findByName(control.value);
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
    }
}


