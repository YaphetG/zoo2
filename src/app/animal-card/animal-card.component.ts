import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model';

@Component({
    selector: 'animal-card',
    templateUrl: './animal-card.component.html',
    styleUrls: ['animal-card.component.css'],
})
export class AnimalCardComponent {
    @Input()
    animal: Animal;
    @Output()
    onZero = new EventEmitter<Animal>();
    editable: boolean;
    set quantity(quantity: number){
        console.log(quantity);
        if ( quantity == 0 ) {
            this.onZero.emit(this.animal);
        }
        this.animal.quantity = quantity;
    }
    toggleEditable() {
        this.editable = !this.editable;
    }


}


