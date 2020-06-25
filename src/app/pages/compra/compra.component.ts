import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';




@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

total = '3,5 Kg';

  constructor(public productoserivcio : InfoProductosService) { 
    

  }

  ngOnInit(): void {
  }

}
