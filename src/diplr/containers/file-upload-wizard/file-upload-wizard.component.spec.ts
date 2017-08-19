import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWizardComponent } from './file-upload-wizard.component';

describe('FileUploadWizardComponent', () => {
  let component: FileUploadWizardComponent;
  let fixture: ComponentFixture<FileUploadWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
