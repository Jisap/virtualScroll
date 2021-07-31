import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any = [];

  constructor(private http: HttpClient) {
    
    if(localStorage.getItem('paisesGuardados')){
      this.paises = JSON.parse(localStorage.getItem('paisesGuardados')) // Si existe en localStorage 'paisesGuardados' usamos esa lista
    }else{
      this.http.get(`https://restcountries.eu/rest/v2/lang/es`)
        .subscribe( paises => this.paises = paises )            // sino la variable [] se iguala a lo que venga del subscribe del http
    }

  }

  ngOnInit(){
  }

  drop(evento:CdkDragDrop<any>){                              // Para hacer persistente los cambios de posición
    //console.log('OK', evento)
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex) // Cambiamos la posición dentro del []
    this.guardarPaises();                                                   // Guardamos en localStorage
  }

  guardarPaises(){
    localStorage.setItem('paisesGuardados', JSON.stringify(this.paises))
  }
}
