import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8030/api/users';

  constructor(private httpClient: HttpClient) {
  }

  getUserList(): Observable<User[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.users)
    );
  }

  getUser(userId: number): Observable<User> {
    const searchUrl = this.baseUrl + '/' + userId;
    return this.httpClient.get<User>(searchUrl);
  }

}

interface GetResponse {
  users: User[];
}
