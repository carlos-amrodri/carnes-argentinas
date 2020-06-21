import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListHomeDialogComponent } from './dialog/list-home-dialog/list-home-dialog.component';

export interface DialogData{
  nombre : string;
  ico : string;
  titulo : string;
  subt : string;
  descri : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog : MatDialog){}
  
  title = 'muestraCarn1';
  nombre : string;

  openDialog(nom : string){
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    this.nombre = nom;
    const dialogRef = this.dialog.open(ListHomeDialogComponent,{
      data : {nombre : this.nombre}
    });
    
  }

}
