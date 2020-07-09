import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {CalculatorComponent} from './calculator/calculator.component';

const routes: Routes = [
  {
    path: 'font-size-editor', component: FontSizeEditorComponent
  },
  {
    path: '', redirectTo: '\font-size-editor', pathMatch: 'full'
  },
  {
    path: 'petInfo', component: PetComponent
  },
  {
    path: 'calculator', component: CalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
