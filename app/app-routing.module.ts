import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path : '', component:TechnologyComponent},
  {path : 'Technology', component:TechnologyComponent},
  {path :"Books",component:BooksComponent},
  {path :"**",component:InvalidComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
