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

import { AngularFileUploaderModule } from 'angular-file-uploader';

// Servicios
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { RequestService } from './services/request.service';

//Inicio de sesion con redes sociales
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
import { FacebookComponent } from './components/facebook/facebook.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestComponent,
    FacebookComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    SocialLoginModule,
  ],
  providers: [
    appRoutingProviders,
    UserService,
    UserGuard,
    RequestService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '916092143878-kbgf7vg7hk1d3rojm7lprv7ocjsgvcke.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('617948235495154'),
            // provider: new FacebookLoginProvider('617948235495154'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider('clientId'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
