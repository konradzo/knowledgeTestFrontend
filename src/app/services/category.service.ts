import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://localhost:8080/api/categories';

  constructor(private httpClient: HttpClient) {
  }

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.categories)
    );
  }
}

interface GetResponse {
  categories: Category[];
}
