import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day01ExpandingScreenComponent } from './Projects/day01-expanding-screen/day01-expanding-screen.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, Day01ExpandingScreenComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
