import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  response: any;


  constructor(private http: HttpClient) { }

  search(arg): Observable<any> {
    return this.http.get("https://api.unsplash.com/search/photos/?client_id=63c59fd87b890e25316eb836dbc0d9af6229909ad26706297953be31529b6d89&query=" + arg)
  }


}


