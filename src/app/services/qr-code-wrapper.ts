

import * as qrcodeLib from 'qrcode'; // Importa la biblioteca que usa CommonJS

export async function generateQRCode(data: string): Promise<string> {
  try {
    return await qrcodeLib.toDataURL(data); // Usa la función de la biblioteca
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function generateQRCodeAsBase64(data: string): Promise<string> {
  try {
    const qrDataURL = await generateQRCode(data); // Llama a la función wrapper
    // Elimina prefijo 'data:image/png;base64,' para obtener solo el contenido base64
    return qrDataURL.replace(/^data:image\/(png|jpeg);base64,/, '');
  } catch (err) {
    console.error(err);
    throw err;
  }
}
