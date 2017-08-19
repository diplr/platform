import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'diplr-file-upload-step-3',
  templateUrl: './file-upload-step-3.component.html',
  styleUrls: ['./file-upload-step-3.component.css']
})
export class FileUploadStep3Component implements OnInit, OnChanges {
  @Input() metadata: { firstName: string, lastName: string, company: string };
  @Input() fileName: string;
  @Output() previous = new EventEmitter();
  @Output() upload = new EventEmitter();

  metaDataFormGroup: FormGroup;
  fileNameFormControl: FormControl;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.metaDataFormGroup = this.formBuilder.group(
      {
        firstName: [{value: '', disabled: true}],
        lastName: [{value: '', disabled: true}],
        company: [{value: '', disabled: true}],
      }
    );
    this.fileNameFormControl = new FormControl('');
    this.fileNameFormControl.disable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metadata'] && this.metaDataFormGroup) {
      this.metaDataFormGroup.setValue({
        firstName: changes['metadata'].currentValue.firstName,
        lastName: changes['metadata'].currentValue.lastName,
        company: changes['metadata'].currentValue.company,
      });
    }
    if (changes['fileName'] && this.fileNameFormControl) {
      this.fileNameFormControl.setValue(changes['fileName'].currentValue);
    }
  }

}
