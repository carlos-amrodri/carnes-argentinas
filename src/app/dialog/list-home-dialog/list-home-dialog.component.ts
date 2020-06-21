import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';
import { DialogData } from 'src/app/app.component';


@Component({
  selector: 'app-list-home-dialog',
  templateUrl: './list-home-dialog.component.html',
  styleUrls: ['./list-home-dialog.component.css']
})
export class ListHomeDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ListHomeDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data : DialogData) { 

    }

  ngOnInit(): void {
  }

}
