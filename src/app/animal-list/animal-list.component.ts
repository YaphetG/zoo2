import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../models/animal.model';
import { ZooService } from '../services/animal-zoo.service';
@Component({
    selector : 'animal-list',
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
    @Input()
    animals: Animal[];
    // title for each set of animals
    @Input()
    sectionTitle: string;
    zooService: ZooService;
    order: string;
    constructor(zooService: ZooService) {
        this.zooService = zooService;
    }

    ngOnInit() {
        // if animals is not passed through input...
        this.getAnimals();
    }
    getAnimals() {
        if (this.animals == null) {
            this.animals = this.zooService.getAnimalsData();
        }
        return this.animals;
    }
    handleZero(animal: Animal) {
        this.zooService.delete(animal);
    }
}
