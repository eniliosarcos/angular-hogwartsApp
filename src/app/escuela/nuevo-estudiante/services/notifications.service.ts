import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) { }

  showSuccess(texto:string, titulo:string) {
    
    this.toastr.success(texto, titulo);
  }
}
