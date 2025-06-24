/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
// src/correo/correo.service.ts
import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import { join } from 'path';

@Injectable()
export class CorreoService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

 async enviarCorreoPedido(data: any) {
  const templatePath = join(process.cwd(), 'src', 'template', 'correo.html');
    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    const template = Handlebars.compile(templateHtml);
    const html = template(data);

  await this.resend.emails.send({
    from: 'onboarding@resend.dev',
    to: data.clienteEmail,
    subject: 'Confirmación de Pedido 🍔',
    html,
  });
}
}