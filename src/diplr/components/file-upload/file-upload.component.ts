import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'diplr-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() fileSelected = new EventEmitter<File>();

  selectedFile;
  isDraggedOn = false;

  constructor() { }

  ngOnInit() {
  }

  draggedOn($event) {
    this.stopEvent($event);
    this.isDraggedOn = true;
  }

  draggedOf($event) {
    this.stopEvent($event);
    this.isDraggedOn = false;
  }

  dropped($event: DragEvent) {
    this.stopEvent($event);
    this.isDraggedOn = false;
    this.selectedFile = $event.dataTransfer.files[0];
    this.fileSelected.emit(this.selectedFile);
  }

  fileSelectedbyInput($event: Event) {
    this.stopEvent($event);
    this.selectedFile = ($event.srcElement as HTMLInputElement).files[0];
    this.fileSelected.emit(this.selectedFile);
  }

  private stopEvent($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
}
