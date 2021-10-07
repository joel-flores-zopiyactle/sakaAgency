import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectComponent } from './components/project/project.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtaComponent } from './components/cta/cta.component';
import { FounderComponent } from './components/founder/founder.component';
import { ContactoComponent } from './shared/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    AboutComponent,
    ServicesComponent,
    ProjectComponent,
    TestimonialComponent,
    FooterComponent,
    CtaComponent,
    FounderComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
