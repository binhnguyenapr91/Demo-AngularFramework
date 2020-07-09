import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';

const routes: Routes = [
  {
    path: 'font-size-editor', component: FontSizeEditorComponent
  },
  {
    path: '', redirectTo: '\font-size-editor', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
