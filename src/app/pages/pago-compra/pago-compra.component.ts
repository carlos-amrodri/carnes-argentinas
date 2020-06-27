import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-compra',
  templateUrl: './pago-compra.component.html',
  styleUrls: ['./pago-compra.component.css']
})
export class PagoCompraComponent implements OnInit {

  segundoTitulo = "Es necesario que seleccione un método de entrega";
  select = false;
  domicilio = false;
  arrayclas = ['alert', 'alert-danger'];
  imagen : string;

  constructor() { }

  ngOnInit(): void {
  }

  checkEnvio(selec : number){
    this.arrayclas = [];
    this.arrayclas = ['alert','alert-primary'];
    this.select = true;
    if(selec == 1){
      this.segundoTitulo = "Con gusto lo esperaremos en nuestro local";
      this.domicilio = false;
      this.imagen = "tienda";
    }
    if(selec == 2){
      this.segundoTitulo = "Indique su domicilio y le envieraemos su compra";
      this.domicilio = true;
      this.imagen = "envio";
    }
  }
}
