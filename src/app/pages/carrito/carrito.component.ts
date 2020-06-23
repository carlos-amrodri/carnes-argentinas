import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';
import { iProducto } from '../../interfaces/productosInterfaces';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogComponent } from '../../dialog/producto-dialog/producto-dialog.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito : iProducto[] = [];
  badge : number;
  monto : number = 0;

  constructor(public servProducto : InfoProductosService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  clickComprar(producto : iProducto){
    this.carrito.push(producto);
    this.badge = this.carrito.length;
    this.monto = 0;
    this.carrito.forEach(prod =>{
      this.monto += prod.precio;
    });
    const dialogRef = this.dialog.open(ProductoDialogComponent,{data : 
      {
        "id" : producto.id,
        "url": producto.url,
        "titulo" : producto.titulo,
        "precio" : producto.precio,
        "oferta" : true
      }
    })
  }
}
