import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiplrComponent} from './diplr.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [DiplrComponent],
  bootstrap: [DiplrComponent]
})
export class DiplrModule {
}
