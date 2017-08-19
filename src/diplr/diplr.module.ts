import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DiplrComponent} from './diplr.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './diplr.routes';
import {FileUploadWizardComponent} from './containers/file-upload-wizard/file-upload-wizard.component';
import {HeaderComponent} from './components/header/header.component';
import {MdInputModule, MdProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadComponent} from './components/file-upload/file-upload.component';
import {FileUploadIconComponent} from './components/file-upload-icon/file-upload-icon.component';
import {FileUploadStep1Component} from './components/file-upload-step-1/file-upload-step-1.component';
import {CardComponent} from './components/card/card.component';
import {FileUploadStep2Component} from './components/file-upload-step-2/file-upload-step-2.component';
import {ReactiveFormsModule} from '@angular/forms';

const containers = [
  FileUploadWizardComponent
];

const components = [
  HeaderComponent,
  FileUploadComponent,
  FileUploadIconComponent,
  FileUploadStep1Component,
  FileUploadStep2Component,
  CardComponent
];

const materialDesignModules = [
  MdInputModule,
  MdProgressBarModule
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,

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
