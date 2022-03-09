import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private httpClient: HttpClient) {}

    public getBands = ()  => this.httpClient.get('http://localhost:3000/bands');
    
}