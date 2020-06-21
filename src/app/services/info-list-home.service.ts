import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iDialogLista } from '../interfaces/dialogInterface';

@Injectable({
  providedIn: 'root'
})
export class InfoListHomeService {

  lista : iDialogLista[] = [];

  constructor(private http : HttpClient) { 
    this.loadLista();
  }

  private loadLista(){
    this.http.get('assets/data/listHome.js')
    .subscribe( (resp : iDialogLista[]) =>{
      this.lista = resp;
    });
  }

}
