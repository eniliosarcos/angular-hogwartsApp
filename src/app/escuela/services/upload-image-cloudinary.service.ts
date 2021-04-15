import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageCloudinaryService {

  constructor(private http: HttpClient) { }

  upload(vals: FormData): Observable<any> {
    let data = vals;
    return this.http.post('https://api.cloudinary.com/v1_1/ejspdev/image/upload', data);
  }
}
