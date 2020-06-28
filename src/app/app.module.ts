import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHomeDialogComponent } from './dialog/list-home-dialog/list-home-dialog.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
<<<<<<< HEAD
import { FooterComponent } from './shared/footer/footer.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ProductoDialogComponent } from './dialog/producto-dialog/producto-dialog.component';
import { CompraComponent } from './pages/compra/compra.component';
import { FinCompraComponent } from './dialog/fin-compra/fin-compra.component';
import { PagoCompraComponent } from './pages/pago-compra/pago-compra.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
=======
import { FooterComponent } from './pages/footer/footer.component';
>>>>>>> master




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListHomeDialogComponent,
    OfertasComponent,
<<<<<<< HEAD
    FooterComponent,
    CarritoComponent,
    ProductoDialogComponent,
    CompraComponent,
    FinCompraComponent,
    PagoCompraComponent,
    MapaComponent
=======
    FooterComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
