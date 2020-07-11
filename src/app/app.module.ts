import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
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
    RatingBarContainerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
