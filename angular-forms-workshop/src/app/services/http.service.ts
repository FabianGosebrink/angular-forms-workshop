import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }

  public post<T>(url: string, body: any, options?: any) {
    return this.http.post<T>(url, body, options);
  }

  public put<T>(url: string, body: any, options?: any) {
    return this.http.put<T>(url, body, options);
  }

  public delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options);
  }
}
