import { Component } from '@angular/core';
import { ZooService } from './services/animal-zoo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app';
  zooService: ZooService;
  constructor(zooService: ZooService) {
  }
}
