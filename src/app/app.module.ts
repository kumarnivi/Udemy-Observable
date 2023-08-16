import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { ShortentPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PipesComponent,
    ShortentPipe
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
