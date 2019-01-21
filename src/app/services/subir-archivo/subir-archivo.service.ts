import { Injectable } from "@angular/core";
import { URL_SERVICIOS } from "src/app/config/config";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class SubirArchivoService {
  constructor(public http: HttpClient) {}

  subirArchivo(archivo: File, tipo: string, id: string) {
    let formData = new FormData();
    let url = URL_SERVICIOS + "/upload/" + tipo + "/" + id;
    console.log(url)
    formData.append("imagen", archivo, archivo.name);
    return this.http.put(url, formData)
  }
}
