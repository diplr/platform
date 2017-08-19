import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'diplr-file-upload-wizard',
  templateUrl: './file-upload-wizard.component.html',
  styleUrls: ['./file-upload-wizard.component.scss']
})
export class FileUploadWizardComponent implements OnInit {
  activeStep = 1;
  nrOfSteps = 3;
  base64Hash;

  constructor() {
  }

  ngOnInit() {
  }

  fileHashCreated(base64Hash: string) {
    this.base64Hash = base64Hash;
  }

  nextClicked() {
    this.activeStep++;
  }

  previousClicked() {
    this.activeStep--;
  }

  uploadToBlockChain() {
    alert('Hier moet ge mij helpen Q ;) I give you them hash ' + this.base64Hash);
  }
}
