import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private toastr: ToastrService) {}
  fromWhere="bottom-right";

  success(bold,message){
  	this.toastr.success(
        `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`,
          "",
          {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + this.fromWhere
          }
        );
  }

  error(bold,message){
  	this.toastr.error(
        `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`,
          "",
          {
            timeOut: 2000,
            enableHtml: true,
            closeButton: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-" + this.fromWhere
          }
        );
  }

  info(bold,message){
  	this.toastr.info(
        `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`,
          "",
          {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-" + this.fromWhere
          }
        );
  }

  warning(bold,message){
  	this.toastr.warning(
        `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"><b>${bold}</b>${message}</span>`,
          "",
          {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-warning alert-with-icon",
            positionClass: "toast-" + this.fromWhere
          }
        );
  }

}
