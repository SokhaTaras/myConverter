import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {ExitLoginGuard} from './guards/exit-login.guard';

import {UserHttpService} from "./services/user-http.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConverterComponent } from './components/converter/converter.component';
import { MetricConverterComponent } from './components/metric-converter/metric-converter.component';
import { SpeedConverterComponent } from './components/speed-converter/speed-converter.component';
import { TemperatureConverterComponent } from './components/temperature-converter/temperature-converter.component';


const converterChildren: Routes = [
  {path:"metric-converter", component: MetricConverterComponent},
  {path:"speed-converter", component: SpeedConverterComponent},
  {path:"temperature-converter", component: TemperatureConverterComponent},
]

const myRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canDeactivate: [ExitLoginGuard],
  },

  {
    path: 'converter',
    component: ConverterComponent,
    children: converterChildren
  }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConverterComponent,
    MetricConverterComponent,
    SpeedConverterComponent,
    TemperatureConverterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ExitLoginGuard,UserHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
