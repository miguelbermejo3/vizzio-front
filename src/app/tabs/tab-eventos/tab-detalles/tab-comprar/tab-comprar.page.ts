import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';

import { QrGenerateService } from '../../../../services/qr-generate.service';

import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab-comprar',
  templateUrl: './tab-comprar.page.html',
  styleUrls: ['./tab-comprar.page.scss'],
})
export class TabComprarPage implements OnInit {
  qrCodeData: string | null = null;
// Propiedades para los campos del formulario
nombre: string = '';
apellido: string = '';
email: string = '';
rrpp: string = '';
numPersonas: number | null = null;



constructor(private qr:QrGenerateService) { }
  ngOnInit() {
   
  }
  
  async generateQRCode(): Promise<void> {
    // Verifica si el correo electrónico es válido
    if (!this.isValidEmail(this.email)) {
      alert('Por favor, introduce un correo electrónico válido.');
      return;
    }

    // Concatena los datos del formulario en una sola cadena
    const data = `
      Nombre: ${this.nombre}
      Apellido: ${this.apellido}
      Correo Electrónico: ${this.email}
      RRPP: ${this.rrpp}
      Nº de personas: ${this.numPersonas}
    `;

    // Genera el código QR como base64
    const qrCodeBase64 = await this.qr.generateQRCodeAsBase64(data.trim());

    // Muestra el código QR generado
    this.qrCodeData = qrCodeBase64;
  }

  // Función para validar el formato de correo electrónico
  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

}
