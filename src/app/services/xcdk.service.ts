import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class XcdkService {

  static data: any = {};

  private baseUrl = '/api';


  constructor(private http: HttpClient) {
    XcdkService.data[1] = 3;
  }

  getComic(): Observable<object> {
    return this.http.get(this.baseUrl + '/info.0.json');
  }

  getComicById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + id + '/info.0.json');
  }


}
