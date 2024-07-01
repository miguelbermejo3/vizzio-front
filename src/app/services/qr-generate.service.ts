// qr-generate.service.ts

import { Injectable } from '@angular/core';
import { generateQRCode, generateQRCodeAsBase64 } from './qr-code-wrapper';

@Injectable({
  providedIn: 'root'
})
export class QrGenerateService {

  constructor() { }

  async generateQRCode(data: string): Promise<string> {
    return generateQRCode(data); // Usa la función envuelta
  }

  async generateQRCodeAsBase64(data: string): Promise<string> {
    return generateQRCodeAsBase64(data); // Usa la función envuelta
  }
}
