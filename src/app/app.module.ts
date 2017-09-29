import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// 3rd party
import { OrderModule } from 'ngx-order-pipe';
// ----------
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { CatAnimalListComponent } from './cat-animal-list/cat-animal-list.component';
import { ZooService } from './services/animal-zoo.service';
import { CategoryPipe } from './pipes/category.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalCardComponent,
    AnimalFormComponent,
    CatAnimalListComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    RouterModule.forRoot([
      {
        path: 'index',
        component: AnimalListComponent,
      },
      {
        path: 'new',
        component: AnimalFormComponent,
      },
      {
        path: 'categories',
        component: CatAnimalListComponent,
      }
    ])
  ],
  providers: [ ZooService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
