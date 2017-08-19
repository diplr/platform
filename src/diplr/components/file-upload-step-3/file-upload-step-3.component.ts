import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'diplr-file-upload-step-3',
  templateUrl: './file-upload-step-3.component.html',
  styleUrls: ['./file-upload-step-3.component.css']
})
export class FileUploadStep3Component implements OnInit {
  @Output() previous = new EventEmitter();
  @Output() upload = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



}
