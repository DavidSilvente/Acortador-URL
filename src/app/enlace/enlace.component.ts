import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrl: './enlace.component.css'
})
export class EnlaceComponent {
  @Input() url: string | null = null;

  copyToClipboard() {
    if (this.url) {
      navigator.clipboard.writeText(this.url).then(() => {
        this.showCopiedTooltip();
      }).catch(err => {
        console.error('Error copying to clipboard', err);
      });
    }
  }

  showCopiedTooltip() {
    // Mostrar el tooltip o algún indicador visual de éxito
    const defaultIcon = document.getElementById('default-icon');
    const successIcon = document.getElementById('success-icon');
    const defaultTooltip = document.getElementById('default-tooltip-message');
    const successTooltip = document.getElementById('success-tooltip-message');

    if (defaultIcon && successIcon && defaultTooltip && successTooltip) {
      defaultIcon.classList.add('hidden');
      successIcon.classList.remove('hidden');
      defaultTooltip.classList.add('hidden');
      successTooltip.classList.remove('hidden');

      setTimeout(() => {
        defaultIcon.classList.remove('hidden');
        successIcon.classList.add('hidden');
        defaultTooltip.classList.remove('hidden');
        successTooltip.classList.add('hidden');
      }, 2000); // Volver al estado original después de 2 segundos
    }
  }
}

