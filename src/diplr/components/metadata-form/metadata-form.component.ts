import {Component, Input, OnInit} from '@angular/core';
import {Metadata} from '../../entities/metadata.entity';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'diplr-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css']
})
export class MetadataFormComponent implements OnInit {
  @Input() metaDataFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
