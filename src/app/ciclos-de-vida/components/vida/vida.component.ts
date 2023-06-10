import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-vida',
  templateUrl: './vida.component.html',
  styleUrls: ['./vida.component.scss']
})
export class VidaComponent implements OnInit, OnDestroy{




  constructor () {
  

    console.log('constructor');
  }
    ngOnInit(): void {
      console.log ('OnInit');
      
    }
  
ngOnDestroy(): void {
  console.log('gnOnDestroy');
}
}
