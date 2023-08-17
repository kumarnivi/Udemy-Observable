import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { ShortentPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { HttpComponent } from './http/http.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInteceptorService } from './auth.interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PipesComponent,
    ShortentPipe,
    FilterPipe,
    HttpComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInteceptorService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
