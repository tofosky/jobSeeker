import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observable } from 'rxjs';
import { Jobs } from '../models/jobModel';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) { }
  
   jobs:Jobs[]=[];
   headers = { 'x-rapidapi-key': '8eca2d09ecmsh8092e841d5df079p12db8fjsn8e0616b9e7c7', 'x-rapidapi-host': 'indeed11.p.rapidapi.com' };
   body = {"location":"New York, NY","page":"1","search_terms":"python programmer"};

  getJobs(){
    return this.http.post<any>('https://indeed11.p.rapidapi.com/', this.body, {
      headers: this.headers
    })
  }

  onGet(){
    return  this.getJobs().subscribe(data=>{
         this.jobs = data.results
    })
  }
 
}


