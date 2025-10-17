import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Observable<any> {
    return this.http.get<any>('./assets/conf.json').pipe(
      tap(data => this.config = data)
    );
  }

  get configData(): any {
    return this.config;
  }
}
