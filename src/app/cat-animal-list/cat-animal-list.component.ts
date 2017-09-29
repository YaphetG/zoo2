import { Component } from '@angular/core';
import { CLASSES } from '../models/animal.model';
import { ZooService } from '../services/animal-zoo.service';

@Component({
    selector: 'cat-animal-list',
    templateUrl: './cat-animal-list.component.html',
    styleUrls: ['./cat-animal-list.component.css']
})
export class CatAnimalListComponent {
    categories = CLASSES;
    zooService: ZooService;
    constructor(zooService: ZooService) {
        this.zooService = zooService;
    }

    getAnimals() {
        return this.zooService.getAnimalsData();
    }
}
