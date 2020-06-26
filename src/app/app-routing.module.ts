import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { CompraComponent } from './pages/compra/compra.component';
import { PagoCompraComponent } from './pages/pago-compra/pago-compra.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'carrito', component : CarritoComponent},
  {path : 'compra', component : CompraComponent},
  {path: 'pagar', component : PagoCompraComponent},
  {path : '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
