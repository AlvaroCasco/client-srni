import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestComponent } from './components/request/request.component';

// Servicios
import { UserService } from './services/user.service';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestComponent,
  ],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [appRoutingProviders, UserService, RequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
