import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadStep1Component } from './file-upload-step-1.component';

describe('FileUploadStep1Component', () => {
  let component: FileUploadStep1Component;
  let fixture: ComponentFixture<FileUploadStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
