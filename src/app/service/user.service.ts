import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user/model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users/findAll')
  }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users/find/${id}`)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/users/delete/${id}`)
  }

  create(user: User): Observable<any> {
    console.log("hahahaha")
    console.log("hahahaha")
    console.log(user)
    console.log("hahahaha")
    return this.http.post('http://localhost:8080/users/create', user)
  }

  edit(user: User): Observable<any> {
    return this.http.put('http://localhost:8080/users/edit',user)
  }
}
