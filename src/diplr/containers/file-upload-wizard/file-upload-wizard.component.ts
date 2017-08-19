import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'diplr-file-upload-wizard',
  templateUrl: './file-upload-wizard.component.html',
  styleUrls: ['./file-upload-wizard.component.scss']
})
export class FileUploadWizardComponent implements OnInit {
  activeStep = 1;
  fileData: {file: File, hash: string};
  metadata;

  constructor() {
  }

  ngOnInit() {
  }

  fileDataSend(fileData: {file: File, hash: string}) {
    this.fileData = fileData;
  }

  step2Nexted(metadata: {firstName: string, lastName: string, company: string}) {
    this.metadata = metadata;
    this.nextClicked();
  }

  nextClicked() {
    this.activeStep++;
  }

  previousClicked() {
    this.activeStep--;
  }

  uploadToBlockChain() {
    alert('Hier moet ge mij helpen Q ;) I give you them hash ' + this.fileData.hash);
  }
}
