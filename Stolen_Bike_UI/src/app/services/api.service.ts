import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  API_URL = environment.Api_url;
    constructor(private httpClient: HttpClient) { }

    setHeads(options) {
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');

        var header: any;
        if (options == 'one') {
            header = {
                headers: new HttpHeaders().set('Content-type', 'application/json').set('token', token || '').set('username', username || '')
            }
            console.log("options...")
            return header;
        }
        if (options == 'two') {
            header = {
                headers: new HttpHeaders({})
            }
            return header;

        }
        if (options == 'three') {
            header = {
                headers: new HttpHeaders({
                    'enctype': 'multipart/form-data',
                })
            }
            return header;
        }
        if (options == 'four') {
            header = {
                headers: new HttpHeaders({
                    'Content-type': 'application/json',
                })
            }
            return header;
        }
    }

    /*login(data) {
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/user/login', data, options)
    }
    Logout(data) {
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/api/user/logout', data, options)
    }*/
    
    getStolenBikes(){
        var options = this.setHeads('one');
        return this.httpClient.get(this.API_URL + '/bikes', options)
    }
    getPoliceOfficers(){
        var options = this.setHeads('one');
        return this.httpClient.get(this.API_URL + '/police', options)
    }
    createStolenBikes(data){
        
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/bikes',data, options)
    }
    updateStolenBikes(id,data){
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + `/bikes/${id}`,data, options)
    }
    createPoliceOfficers(data){
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + '/police',data, options)
    }
    updatePoliceOfficers(id,data){
        var options = this.setHeads('one');
        return this.httpClient.post(this.API_URL + `/police/${id}`,data, options)
    }



    
}
