import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PageFirstComponent } from './pages/page-first/page-first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageSecondComponent } from './pages/page-second/page-second.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    MainComponent,
    PageFirstComponent,
    PageSecondComponent,
    TestComponent
  ],
  imports: [
    CommonModule, 
    BrowserAnimationsModule,
    MatTabsModule
  ],
  exports:[MainComponent]
})
export class HomeModule { }
