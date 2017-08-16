import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-from-wallet',
  templateUrl: './send.from.wallet.component.html',
  styleUrls: ['./send.from.wallet.component.css']
})
export class SendFromWalletComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor() { }

  ngOnInit() {
    this.firstName = 'Alec';
    this.lastName = 'Thompson';
  }
}
