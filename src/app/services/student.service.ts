import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getAll(){
    return this.http.get<any>('https://api.hatchways.io/assessment/students');
  }

}
