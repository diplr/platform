import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'diplr-file-upload-step-2',
  templateUrl: './file-upload-step-2.component.html',
  styleUrls: ['./file-upload-step-2.component.css']
})
export class FileUploadStep2Component implements OnInit {
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  metaDataFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.metaDataFormGroup = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        company: ['', Validators.required],
      }
    );
  }

  formSubmit(event) {
    console.log('event', event.value);
  }
}
