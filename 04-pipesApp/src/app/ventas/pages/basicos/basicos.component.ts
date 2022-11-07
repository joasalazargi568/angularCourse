import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'johnatan';

  nombreUpper: string = 'JOHNATAN';

  nombreCompleto: string = 'JoHnAtAn SaLaZaR';

  fecha: Date = new Date();
}
