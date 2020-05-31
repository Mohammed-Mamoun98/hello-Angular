import { HttpClient } from "@angular/common/http";
import { users } from "./../../data/users";
import { Injectable } from "@angular/core";
import { User } from "src/app/data/users";
import { Observable, of } from "rxjs";
import { retry, debounceTime, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private _url = "https://jsonplaceholder.typicode.com/users";

  private Users: User[] = users;
  constructor(private http: HttpClient) {}

  getUsers(): User[] {
    return this.Users;
  }

  getUserFromUrl(): Observable<User[]> {
    return this.http.get<User[]>(this._url);
  }

  getUserFromUrlById(id: number): Observable<User> {
    return this.http.get<User>(`${this._url}/${id}`).pipe(
      debounceTime(1000),
      retry(2),
      catchError((err) => {
        console.log(err.statusText);
        return Observable.throw(err.statusText);
      })
    );
  }
  deleteUserFromUrlById(id: number): Observable<User> {
    return this.http.delete<User>(`${this._url}/${id}`);
  }

  getUserById(id: number): User {
    return this.Users.find((value: User) => value.id == id);
  }

  DeleteUserById(id: number): void {
    this.Users = this.Users.filter((value: User) => value.id != id);
  }
}
