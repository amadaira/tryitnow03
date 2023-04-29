//Usamos el decorador Input para recibir datos de productos
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;
  //Definimos una clase con el decorador Output
  // y una instancia de EventEmitter
  //Esto emitirá un evento cuando el valor de
  //la propiedad notify cambie
  @Output() notify = new EventEmitter();
}
