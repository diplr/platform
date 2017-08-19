import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadStep2Component } from './file-upload-step-2.component';

describe('FileUploadStep2Component', () => {
  let component: FileUploadStep2Component;
  let fixture: ComponentFixture<FileUploadStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
