import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fin-compra',
  templateUrl: './fin-compra.component.html',
  styleUrls: ['./fin-compra.component.css']
})
export class FinCompraComponent implements OnInit {

  segundoTitulo = "Es necesario que seleccione un método de entrega";
  select = false;
  domicilio = false;
  arrayclas = ['alert', 'alert-danger'];

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
    }
    if(selec == 2){
      this.segundoTitulo = "Indique su domicilio y le envieraemos su compra";
      this.domicilio = true;
    }
  }
}
