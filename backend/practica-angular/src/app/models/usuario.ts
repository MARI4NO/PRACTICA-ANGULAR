export class Usuario {
    _id!:String;
    username!:string;
    email!:string;
    password!:string;

    constructor(){
        this.username="";
        this.email="";
        this.password="";
    }
}
