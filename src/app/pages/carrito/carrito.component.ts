import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public servProducto : InfoProductosService) { }

  ngOnInit(): void {
  }

}
