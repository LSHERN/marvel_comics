import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private readonly http: HttpClient) { }

  fetchAllComics():Observable<any> {
    let params = new HttpParams()
        .set("apikey", "6baaf5c23dc0a2690e7e40d2db37379c")
        .set("hash", "69f4ca1e0f164f278d3003ec938e5bd3")
        .set("ts", "1");

    return this.http.get("http://gateway.marvel.com/v1/public/comics", {params});
  }
}
