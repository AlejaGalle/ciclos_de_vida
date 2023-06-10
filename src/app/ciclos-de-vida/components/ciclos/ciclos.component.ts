import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent implements OnInit {
  public producto: string;
  public cantidad: string;
  public durationInSeconds= 5;
 

  constructor( 
    private _snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.producto = '';
    this.cantidad = '';
  }
    ngOnInit(): void {

    }

    openSnackBar() {
      this._snackBar.open('Hola' + this.producto + ' ' + this.cantidad, 'Cerrar', {
        duration: this.durationInSeconds * 1000,
      });

} 
navegar () {
  this.router.navigate(['/ruteo']);
}
 
}
