import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/usuario.model";
import {
  UsuarioService,
  SubirArchivoService
} from "src/app/services/service.index";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: any;

  constructor(
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService
  ) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {}

  seleccionImage(archivo) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf("image") < 0) {
      swal(
        "solo imagenes",
        "el archivo seleccionado no es una imagen",
        "error"
      );
    }
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
    console.log(archivo);
    this.imagenSubir = archivo;
  }

  cambiarImagen() {
    this._usuarioService
      .cambiarImagen(this.imagenSubir, this.usuario._id)
      .subscribe();
  }
  guardar(usuario: Usuario) {
    console.log(usuario)
    this.usuario.nombre = usuario.nombre;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
    }
    this._usuarioService.actualizarUsuario(this.usuario).subscribe();
  }
}
