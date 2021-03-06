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
  imagen : string;



  constructor(public servProducto : InfoProductosService,
    private dialog : MatDialog) { 
      this.badge = servProducto.carrito.length;
      this.imagen = "corteCarne";
    }

  ngOnInit(): void {
  }

  changeTab(c : number){
    if(c == 0){
      this.imagen = "corteCarne";
    }
    if(c == 1){
      this.imagen = "corteCerdo";
    }
  
  }

  clickComprar(producto : iProducto){
  
    const dialogRef = this.dialog.open(ProductoDialogComponent,{data : 
      {
        "id" : producto.id,
        "url": producto.url,
        "titulo" : producto.titulo,
        "precio" : producto.precio,
        "oferta" : true,
        "cantidad" : 0,
        "type" : producto.type
      }
    });

    dialogRef.afterClosed().subscribe((result : iProducto) =>{
      if(result.adquirido){
        this.servProducto.changeProducto(result, true);
        this.servProducto.addProducCarrito(result);
        this.badge = this.servProducto.carrito.length;
        this.monto = 0;
        this.servProducto.carrito.forEach(prdo =>{
            this.monto += prdo.precioCompa;
        });
      }
    });
  }
}
