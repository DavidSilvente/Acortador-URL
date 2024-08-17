import { Component, Input, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {
  @Input() shortUrl: string = '';
  public qrCodeImage: string | null = null;

  ngOnInit(): void {
    if (this.shortUrl) {
      this.generateQRCode(this.shortUrl);
    }
  }

  generateQRCode(url: string): void {
    QRCode.toDataURL(url, { width: 300, margin: 2 }, (err, url) => {
      if (err) {
        console.error(err);
        return;
      }
      this.qrCodeImage = url;
    });
  }
}
