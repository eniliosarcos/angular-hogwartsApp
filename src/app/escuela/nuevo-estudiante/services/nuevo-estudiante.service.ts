import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NuevoEstudianteService {
  
  constructor(private http: HttpClient) { }

  upload(data: FormData): Observable<any> {
    return this.http.post(environment.api_cloudinary_url, data);
  }
}
