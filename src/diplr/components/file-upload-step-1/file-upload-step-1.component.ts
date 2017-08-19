import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import sha256 from 'js-sha256';

@Component({
  selector: 'diplr-file-upload-step-1',
  templateUrl: './file-upload-step-1.component.html',
  styleUrls: ['./file-upload-step-1.component.css']
})
export class FileUploadStep1Component implements OnInit {
  @Output() fileHashCreate = new EventEmitter<string>();
  @Output() next = new EventEmitter();

  fileHashed = false;
  uploading = false;

  uploadProgress

  constructor() { }

  ngOnInit() {
  }

  fileSelected(event: File) {
    this.calculateHash(event);
  }

  private calculateHash(file: File) {
    this.uploading = true;
    const batch = 1024 * 1024; // 1 mb
    const reader = new FileReader();
    reader.onload = (e: any) => {
      let start = 0;
      let hash = sha256.create();
      const asyncUpdate = () => {
        if (start < e.total) {
          this.uploadProgress = (start / e.total * 100).toFixed(2);
          const end = Math.min(start + batch, e.total);
          hash = hash.update(e.target.result.slice(start, end));
          start = end;
          setTimeout(asyncUpdate);
        } else {
          console.log(hash.hex());
          this.fileHashCreate.emit(this.hexToBase64(hash.hex()));
          this.fileHashed = true;
        }
      };
      asyncUpdate();
    };
    reader.readAsArrayBuffer(file);
  }

  private hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function (a) {
      return String.fromCharCode(parseInt(a, 16));
    }).join(''));
  }
}
