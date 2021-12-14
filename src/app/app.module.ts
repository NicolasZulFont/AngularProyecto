//Librerias
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegistroComponent } from './registro/registro.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ExitosaComponent } from './exitosa/exitosa.component';
import { NavUserComponent } from './nav-user/nav-user.component';

//Pipe
import {KeyPipe} from './pipes/key.pipe';
import { EditLugaresComponent } from './edit-lugares/edit-lugares.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHomeComponent,
    LogInComponent,
    RegistroComponent,
    LugaresComponent,
    ExitosaComponent,
    NavUserComponent,
    KeyPipe,
    EditLugaresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  entryComponents:[
    LogInComponent,
    RegistroComponent,
    EditLugaresComponent,
    ExitosaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
