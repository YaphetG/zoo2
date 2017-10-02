// This is the data service layer for all db related ops.

import { Animal } from '../models/animal.model';
import { Injectable } from '@angular/core';

const ANIMALS = [
    {
        name : 'Lion',
        avgHeight : 70,
        avgWeight : 500,
        class : 'Mammal',
        description : 'A very strong animal, king of the Jungle',
        imgPath : 'http://www.takepart.com/sites/default/files/styles/large/public/Old-lion-killerd-MAIN.jpg',
        quantity : 2,
    },
    {
        name: 'Dog',
        avgHeight: 30,
        avgWeight: 100,
        class: 'Mammal',
        description : 'did they seriously put a dog in the zoo !?',
        imgPath : 'https://cdn.asiancorrespondent.com/wp-content/uploads/2013/08/ChinaZooMastiffLion.jpg',
        quantity : 1
    },
    {
        name: 'Moose',
        avgHeight: 90,
        avgWeight: 500,
        class: 'Mammal',
        description : 'an animal of mighty horns',
        imgPath : 'http://s.hswstatic.com/gif/dangerous-moose-175172557.jpg',
        quantity : 1
    },
    {
        name: 'Parrot',
        avgHeight: 10,
        avgWeight: 10,
        class: 'Bird',
        description : 'The chattiest animal in the zoo.',
        imgPath : 'http://pngimg.com/uploads/parrot/parrot_PNG713.png',
        quantity : 1
    },
];

@Injectable()
export class ZooService {
    animals: Animal[];

    constructor() {
        this.animals = ANIMALS;
    }

    /**
     * as if it was a network call or somthn
     */
    public getAnimalsData() {
        return this.animals;
    }
    public findByName(name: string): Animal {
        for ( let i = 0; i < this.animals.length; i++) {
            if ( this.animals[i].name === name) {
                return this.animals[i];
            }
        }
        return null;
    }
    public save(animal: Animal) {
        this.animals.push(animal);
    }

    public delete(animal: Animal) {
        const delIndex = this.animals.indexOf(animal);
        const temp = this.animals[delIndex];
        this.animals[delIndex] = this.animals[this.animals.length - 1];
        this.animals[length - 1] = temp;
        this.animals.pop();
    }

}
