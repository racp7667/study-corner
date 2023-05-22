import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroductionComponent } from './Components/introduction/introduction.component';
import { CoursecontentComponent } from './Components/coursecontent/coursecontent.component';
import { FooterComponent } from './Components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    CoursecontentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
