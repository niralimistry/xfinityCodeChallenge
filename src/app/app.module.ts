import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProcessDataComponent } from './process-data/process-data.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomPipe} from './pipes/custom.pipe';

const appRoutes : Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ProcessData', component: ProcessDataComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProcessDataComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
