import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { iProducto } from '../../interfaces/productosInterfaces';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {

  precio = "$";
  peso = "Kg";
  precioBase : number;


  autoTicks = false;
  disabled = false;
  invert = false;
  max = 40;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;

  constructor(public dialogRef : MatDialogRef<ProductoDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public producto : iProducto) { 
      this.precioBase = producto.precio;
      this.precio ="$" + this.precioBase / 4;
      this.peso = "Kg 0,25";
    }

  ngOnInit(): void {
  }

  formatLabel() {
    console.log('el valor' + this.value / 4)
    var calc = this.value / 4;
    return calc + "Kg";
  }

  confirmar(){
    this.producto.adquirido = true;
    this.dialogRef.close(this.producto);
  }

  cambioPrecio(){
    var calc = this.value / 4;
    var precComp = calc * this.precioBase
    this.precio = "$" + precComp;
    this.peso = "Kg " + calc;
    this.producto.cantidad = calc;
    this.producto.precioCompa = precComp;
  }

  cerrar(){
    this.dialogRef.close();
  }

}
