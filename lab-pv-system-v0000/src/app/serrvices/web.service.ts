import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebService {

  //base_url: string = "http://192.168.0.108:3000/"

  //base_url: string = "http://192.168.100.13:3000/"
  //base_url: string = "http://localhost:3000/"
  //base_url: string = "https://localhost:18443/"

  //base_url: string = "http://192.168.100.37:3000/"

  //base_url: string = "https://192.168.100.37:18443/";

  //base_url: string = "https://95.217.147.108:18443/";
  
  base_url: string = "http://148.66.129.239:3000/"

  constructor(public http: HttpClient) { }

  getLabInfo(): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get(this.base_url+'api/lab/', {
      headers: headers
    });
  }

  getMachineInfo(): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get(this.base_url+'api/machine-info/', {
      headers: headers
    });
  }

  getPvInfo(): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get(this.base_url+'api/pv-info/', {
      headers: headers
    });
  }


  getEgcrInfo(): Observable<any>{
    let headers = new HttpHeaders();
    return this.http.get(this.base_url+'api/egcr-info/', {
      headers: headers
    });
  }


  sendNotification(title: string, body_: string): Observable<any>{
    //console.log("notification send called");
    //console.log(body_);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({"title": title, "body": body_});
    return this.http.post(this.base_url+'api/send-notification' , body, {
      headers: headers
    });
  }

  updatePvInfo(pv: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(pv);
    return this.http.post(this.base_url+'api/pv-info/update' , body, {
      headers: headers
    });
  }

  DeletePVInfo(pv: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(pv);
    return this.http.post(this.base_url+'api/pv-info/delete' , body, {
      headers: headers
    });
  }

  AddPVInfo(pv: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(pv);
    return this.http.post(this.base_url+'api/pv-info/add' , body, {
      headers: headers
    });
  }

  updateMachineInfo(machine: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(machine);
    return this.http.post(this.base_url+'api/machine-info/update' , body, {
      headers: headers
    });
  }
  
  getMyMachineInfo(machine: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(machine);
    return this.http.post(this.base_url+'api/machine-info/my-info' , body, {
      headers: headers
    });
  }

  DeleteMachineInfo(machine: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(machine);
    return this.http.post(this.base_url+'api/machine-info/delete' , body, {
      headers: headers
    });
  }

  AddLabInfo(lab: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(lab);
    console.log(body);
    return this.http.post(this.base_url+'api/lab/add' , body, {
      headers: headers
    });
  }

  updateLabInfo(lab: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(lab);
    return this.http.post(this.base_url+'api/lab-info/update' , body, {
      headers: headers
    });
  }

  DeleteLabInfo(lab: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(lab);
    return this.http.post(this.base_url+'api/lab-info/delete' , body, {
      headers: headers
    });
  }

  AddMachineInfo(machine: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    let body = JSON.stringify(machine);
    console.log(body);
    return this.http.post(this.base_url+'api/machine-info/add' , body, {
      headers: headers
    });
  }
}
