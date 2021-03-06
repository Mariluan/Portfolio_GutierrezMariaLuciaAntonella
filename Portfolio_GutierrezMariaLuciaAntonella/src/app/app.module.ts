import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogosArPrComponent } from './componentes/logos-ar-pr/logos-ar-pr.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosArPrComponent,
    SocialComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
