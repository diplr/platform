import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadStep3Component } from './file-upload-step-3.component';

describe('FileUploadStep3Component', () => {
  let component: FileUploadStep3Component;
  let fixture: ComponentFixture<FileUploadStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
