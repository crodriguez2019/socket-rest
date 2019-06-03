import { Usuario } from "./usuario";

export class UsuariosLista{

    private Lista: Usuario[] = [];

    constructor(){}

    public agregar( usuario: Usuario){
        this.Lista.push(usuario);
        console.log(this.Lista)
        return usuario;
    }

    public actualizarNombre( id:string, nombre: string){
        for(let usuario of this.Lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log("==== Actualizando Usuario ====");
        console.log(this.Lista);
    }

    // Obtener lista de usuario

    public getLista(){
         return this.Lista.filter( usuario => usuario.nombre !== 'sin-nombre');
    }

    // Obtener un usuario
    public getUsuario( id:string ){
        return this.Lista.find( usuario => usuario.id === id);
    }

    // Obtener usuario en una sala en particular

    public getUsuarioEnSala( sala: string){
        return this.Lista.filter( usuario => usuario.sala === sala);
    }


    // Borrar usuario
    public borrarUsuario(id:string){
        const tempUsuario = this.getUsuario(id);
        
        this.Lista = this.Lista.filter(usuario => usuario.id !== id);
             
        return tempUsuario;
    }

}