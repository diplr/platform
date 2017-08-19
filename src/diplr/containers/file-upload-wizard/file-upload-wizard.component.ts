import {Component, OnInit} from '@angular/core';
// import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import sha256 from 'js-sha256';

@Component({
  selector: 'diplr-file-upload-wizard',
  templateUrl: './file-upload-wizard.component.html',
  styleUrls: ['./file-upload-wizard.component.scss']
})
export class FileUploadWizardComponent implements OnInit {
  isDraggedOn = false;
  fileSelected: File;

  constructor() {
  }

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
    this.fileSelected = $event.dataTransfer.files[0];
    this.calculateHash();
  }

  fileSelectedbyInput($event: Event) {
    this.stopEvent($event);
    this.fileSelected = ($event.srcElement as HTMLInputElement).files[0];
    this.calculateHash();
  }

  private calculateHash() {
    // const method: any = {};
    // method.update = sha256;
    // const reader = new FileReader();
    // reader.onload = function (event: any) {
    //   try {
    //     if (method.update) {
    //       debugger;
    //       const batch = 1024 * 1024;
    //       let start = 0;
    //       let current = method;
    //       current.update = method.update;
    //       const asyncUpdate = function () {
    //         if (start < event.total) {
    //           console.log('hashing...' + (start / event.total * 100).toFixed(2) + '%');
    //           const end = Math.min(start + batch, event.total);
    //           current = current.update(event.target.result.slice(start, end));
    //           start = end;
    //           setTimeout(asyncUpdate);
    //         } else {
    //           console.log(current.hex());
    //         }
    //       }
    //       asyncUpdate();
    //     } else {
    //       console.log(method(event.target.result));
    //     }
    //   } catch(e) {
    //     console.log(e);
    //   }
    // };
    // console.log('loading...');
    // reader.readAsArrayBuffer(this.fileSelected);
    const reader = new FileReader();

    reader.onloadend = (e: any) => {
      const hash = sha256.create();
      hash.update(e.target.result);
      console.log(hash.hex());
      console.log(this.hexToBase64(hash.hex()));
      // console.log('e.target', e.total);
      // const contents = e.target.result;
      // const hash = sha256(contents);
      // // const base64 = Base64.stringify(hash);
      // console.log('hash', base64);
    };

    reader.readAsArrayBuffer(this.fileSelected);
  }

  private hexToBase64(hexstring) {
    return btoa(hexstring.match(/\w{2}/g).map(function (a) {
      return String.fromCharCode(parseInt(a, 16));
    }).join(''));
  }

  private stopEvent($event) {
    $event.preventDefault();
    $event.stopPropagation();
  }
}
