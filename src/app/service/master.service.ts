import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel, Application } from '../model/application';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  addNewApplication(obj:Application):Observable<ApiResponseModel>{

    return this.http.post<ApiResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication",obj)
  }

}
