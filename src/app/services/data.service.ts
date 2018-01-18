import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('../assets/data.json');
  }

}
