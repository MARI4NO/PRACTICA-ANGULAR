import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario!:Usuario;
  tituloform!:string;
  usuarios!:Array<Usuario>;
  cargapassword!:boolean;


  constructor() {
    this.tituloform ="Titulo Asignado desde codigo";
    this.usuario = new Usuario();
    //this.usuario.username ="mariano"
    this.usuarios = new Array<Usuario>();
   }

  ngOnInit(): void {
 
    }

  guardarRegistro(){
    //console.log(this.usuario);
    //alert('cargando ts');
    this.usuarios.push(this.usuario);
    //se inicializa de nuevo la variable
    this.usuario = new Usuario();
  }
}
