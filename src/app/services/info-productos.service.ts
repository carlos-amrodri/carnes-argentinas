import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iProducto } from '../interfaces/productosInterfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {

  productos : iProducto[] = [];
  carnes : iProducto[] = [];
  porcinos : iProducto[] = [];
  pollos : iProducto[] = [];
  achuras : iProducto[] = [];
  carrito : iProducto[] = [];

  constructor(private http : HttpClient) {
    this.loadSecciones();
   }

  addProducCarrito(produ : iProducto){
      this.carrito.push(produ);
  }

  changeProducto(produc : iProducto){
    console.log('Type de producto ' + produc.titulo + ' es: ' + produc.type );
    if (produc.type == 1){
      //Carne vacuna
      this.carnes.forEach( p =>{
        if (p.id == produc.id){
          p.adquirido = true;
        }
      });
    }
    if (produc.type == 2){
      //Carne de cerdo
      this.porcinos.forEach( p =>{
        if(p.id == produc.id){
          p.adquirido = true;
        }
      });
    }
  }

  getTotal(){
    var total = 0;
    this.carrito.forEach(prod =>{
      total += prod.precioCompa;
    });
    return total;
  }

  getCantidad(){
    var cant = this.carrito.length;
    return cant;
  }

  private loadProductos(){
    return new Promise((resolve, rejects) =>{
      this.http.get('assets/data/productos.js')
      .subscribe((resp : iProducto[]) =>{
        this.productos = resp;
        resolve();
      });
    })
  }

  private loadSecciones(){
    this.loadProductos().then( ()=>{
      this.productos.forEach( prod =>{
        if(prod.type == 1){
          this.carnes.push(prod);
        }
        if(prod.type == 2){
          this.porcinos.push(prod);
        }
        if(prod.type == 3){
          this.pollos.push(prod);
        }
        if(prod.type == 4){
          this.achuras.push(prod);
        }
      });
    });
  }

}
