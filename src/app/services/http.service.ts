import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private httpClient: HttpClient) {}

    public getBands = () : Observable<any> => this.httpClient.get('http://localhost:3000/bands');
    
}