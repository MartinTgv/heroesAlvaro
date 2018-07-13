import { Component, OnInit } from '@angular/core';
import {heroes ,MyServiceService }from '../servicios/my-service.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
 hereo:heroes[] = [] ;  



  constructor(private pepito:MyServiceService) { 
    console.log ("hola estoy en el constructor");
  }

  ngOnInit() {
  }

}

