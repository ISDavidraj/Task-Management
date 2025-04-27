import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl,this.httpOptions);
  }

  addTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task,this.httpOptions);
  }

  updateTask(task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${task.id}`, task,this.httpOptions);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`,this.httpOptions);
  }
}
