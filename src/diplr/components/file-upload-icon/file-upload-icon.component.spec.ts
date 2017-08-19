import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadIconComponent } from './file-upload-icon.component';

describe('FileUploadIconComponent', () => {
  let component: FileUploadIconComponent;
  let fixture: ComponentFixture<FileUploadIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
