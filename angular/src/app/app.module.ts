import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    AllAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
