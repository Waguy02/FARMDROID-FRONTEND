
import { HttpClientModule } from '@angular/common/http';







import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelModule } from './hotel/hotel.module';
import { CapteurModule } from './capteur/capteur.module';
import { EspeceModule } from './espece/espece.module';
import { ActionneurModule } from './actionneur/actionneur.module';
import { ParcelleModule } from './parcelle/parcelle.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MesureModule } from './mesure/mesure.module';
import { PlanCapteurModule } from './planCapteur/plan-capteur.module';





@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),
    HotelModule,
    CapteurModule,
    EspeceModule,
    ActionneurModule,
    ParcelleModule,
    MatProgressSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    MesureModule,
    PlanCapteurModule
    
    
    
    
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
