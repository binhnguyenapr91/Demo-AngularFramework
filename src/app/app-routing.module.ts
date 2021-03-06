import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {PetComponent} from './pet/pet.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';
import {ArticlesComponent} from './articles/articles.component';
import {RatingBarContainerComponent} from './rating-bar-container/rating-bar-container.component';
import {CoundownTimerContainerComponent} from './coundown-timer-container/coundown-timer-container.component';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: 'blog', component: BlogComponent,
  },
  {
    path: 'blog/:id', component: BlogDetailComponent,
  },
  {
    path: 'blog/:id/edit', component: BlogEditComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'font-size-editor', component: FontSizeEditorComponent
  },
  {
    path: 'todo', component: TodoComponent
  },
  {
    path: '', redirectTo: '\font-size-editor', pathMatch: 'full'
  },
  {
    path: 'petInfo', component: PetComponent
  },
  {
    path: 'colorPicker', component: ColorPickerComponent
  },
  {
    path: 'calculator', component: CalculatorComponent
  },
  {
    path: 'articles', component: ArticlesComponent
  },
  {
    path: 'rating-bar-container', component: RatingBarContainerComponent
  },
  {
    path: 'countdown-timer-container', component: CoundownTimerContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
