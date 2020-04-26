import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Http,Response,Headers } from '@angular/http';
import {Task} from './task';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class TaskService {
  editTaskDetails = new BehaviorSubject({});
  headers=new Headers({'Content-Type':'application/json'});

  constructor(private http:Http) { }

  getTasks() {
    return this.http.get(environment.apiUrl,{headers:this.headers});
  }
  addTask(task:Task){
    return this.http.post(environment.apiUrl,task,{headers:this.headers});
  }
  updateTask(task:Task){
    return this.http.put(environment.apiUrl,task,{headers:this.headers});
  }
}
