import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiplrComponent} from './diplr.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './diplr.routes';
import {FileUploadWizardComponent} from './containers/file-upload-wizard/file-upload-wizard.component';
import {HeaderComponent} from './components/header/header.component';
import {MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const containers = [
  FileUploadWizardComponent
];

const components = [
  HeaderComponent
];

const materialDesignModules = [
  MdInputModule
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    ...materialDesignModules
  ],
  declarations: [
    DiplrComponent,
    ...containers,
    ...components
  ],
  bootstrap: [DiplrComponent]
})
export class DiplrModule {
}
