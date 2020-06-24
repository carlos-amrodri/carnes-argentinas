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
      console.log('productos' + this.productos.length)
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
