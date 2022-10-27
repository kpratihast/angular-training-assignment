import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Globals } from './global';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { EditpostComponent } from './editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    ViewpostComponent,
    PostdetailsComponent,
    AdminloginComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [Globals, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
