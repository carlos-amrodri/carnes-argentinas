import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InfoListHomeService } from '../../services/info-list-home.service';
import { ListHomeDialogComponent } from '../../dialog/list-home-dialog/list-home-dialog.component';
import { iDialogLista } from '../../interfaces/dialogInterface';

export interface DialogData{
  nombre : string;
  ico : string;
  titulo : string;
  subt : string;
  descri : string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrar : iDialogLista;

  constructor(private dialog : MatDialog, public infoList : InfoListHomeService) { }

  ngOnInit(): void {
  }

  openDialog(id : number){
    this.infoList.lista.forEach(info =>{
      if(info.id == id){
        this.mostrar = info;
      }
    })
    const dialogref = this.dialog.open(ListHomeDialogComponent,{
      data : {ico : this.mostrar.icono, titulo : this.mostrar.titulo, subt : this.mostrar.subtitulo,
      descri : this.mostrar.descripcion}
    });
  }
}
