import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticia: Noticia = new Noticia();
  noticias!: Array<Noticia>;
  indice: number = 0;

  constructor() {
    this.noticias = new Array<Noticia>();
    //this.noticia = new Noticia();
    //this.noticia.push(new Noticia1(1,"noticia 1","a aumentado el ingreso de los turistas..","noticia1.jpg" ))
    this.noticias = [{ codigo: 1, titulo: "El dólar blue modera suba inicial, pero se mantiene firme arriba de los $200", detalle: "El dólar blue mantiene su tendencia al alza este martes 3 de mayo, con lo que anota su segunda suba en forma consecutiva, según un relevamiento de Ámbito en el Mercado Negro de Divisas.", img: "noticia1.jpg" }, 
    { codigo: 2, titulo: "Un coleccionista pagó u$s 450.000 por una camiseta de Messi", detalle: "Se trata de la camiseta de Barcelona que Leo expuso de cara a los hinchas del Madrid en el clásico de 2017, en el Bernabéu, tras haber marcado el gol del triunfo y el N° 500 de su carrera.", img: "noticia2.jpg" }, 
    { codigo: 3, titulo: "River firmó una goleada histórica y se clasificó a cuartos", detalle: "El Millonario goleó 7-0 al Verde en Junín con los goles de Tomás Pochettino, Julián Álvarez -tres-, Enzo Fernández, Esequiel Barco y Santiago Simón, por la fecha 13 del torneo", img: "noticia3.jpg" }
    ];
    this.iniciar();
    
  }

  ngOnInit(): void {
  }

  iniciar(){
    if(this.indice <this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
    
  }

  anterior() {
    this.indice =this.indice - 1;
    if(this.indice <= -1 ){
      this.indice = this.noticias.length;
    }
    if(this.indice< this.noticias.length){
      this.noticia=this.noticias[this.indice];
    }
    
  
  }


  siguiente() {
    this.indice =this.indice +1;
    if(this.indice >= this.noticias.length ){
      this.indice = 0;
    }
    if(this.indice< this.noticias.length){
      this.noticia=this.noticias[this.indice];
    }
  }
}
