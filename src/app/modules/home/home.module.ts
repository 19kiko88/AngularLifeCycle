import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule, MatTabsModule
  ]
})
export class HomeModule { }
