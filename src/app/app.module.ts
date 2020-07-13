import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ArticlesComponent } from './articles/articles.component';
import { LikeComponent } from './like/like.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { RatingBarContainerComponent } from './rating-bar-container/rating-bar-container.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CoundownTimerContainerComponent } from './coundown-timer-container/coundown-timer-container.component';
import { CountdownTimerGetSetComponent } from './countdown-timer-get-set/countdown-timer-get-set.component';
import { TodoComponent } from './todo/todo.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    ColorPickerComponent,
    ArticlesComponent,
    LikeComponent,
    ArticleDetailComponent,
    NameCardComponent,
    ProcessBarComponent,
    RatingBarComponent,
    RatingBarContainerComponent,
    CountdownTimerComponent,
    CoundownTimerContainerComponent,
    CountdownTimerGetSetComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
