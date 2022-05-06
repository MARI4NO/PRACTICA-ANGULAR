import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  palabraOriginal!: string;
  palabraMostrar!: string;
  vidas: number = 4;
  perdiVidas!: boolean;
  mostrar!: boolean;
  i!: number;
  estadoJue!: String;
  palabras!: Array<string>;
  imagenes!:Array<String>;
  constructor() {
    this.imagenes=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']
    this.palabras = ['GATO', 'PERRO', 'MURCIELAGO', 'CABALLO', 'VACA', 'RATON', 'LORO', 'GALLO', 'PATO', 'DELFIN']
    this.inicializar();

  }

  ngOnInit(): void {
  }

  ingresarLetra(x: string) {
    this.perdiVidas = true;

    if (this.vidas == 0) {
      this.estadoJue = "Has perdido la palabra era :";
      this.mostrar = true;
    }
    else {
      for (this.i = 0; this.i < this.palabraOriginal.length; this.i++) {
        if (x == this.palabraOriginal[this.i]) {
          this.perdiVidas = false;
          //this.palabraMostrar[this.i].replace('-',x);
          this.palabraMostrar = this.palabraMostrar.substring(0, this.i) + x + this.palabraMostrar.substring(this.i + 1);
        }
        if (this.palabraMostrar == this.palabraOriginal) {
          this.mostrar = true;
          this.estadoJue = "Has ganado la palabra era :";

        }
      }
      if (this.perdiVidas) {
        this.vidas--;
      }
    }
  }

  inicializar() {
    this.palabraOriginal = "MAMA";
    this.palabraMostrar = '';
    this.mostrar = false;

    for (this.i = 0; this.i < this.palabraOriginal.length; this.i++) {
      if (this.palabraOriginal[this.i] >= 'A' && this.palabraOriginal[this.i] <= 'Z') {
        this.palabraMostrar += '-';
      }
      else {
        this.palabraMostrar += this.palabraOriginal[this.i];
      }
    }
  }


  getMostrar() :Boolean {
   
    return this.mostrar;
  }
/*
  cambiarFoto(){
    if(this.vidas==4){
      
    }
    else{
      if(){
        
      }
      else{

      }
    }
  }
*/
}
