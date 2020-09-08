import { Injectable } from '@angular/core';
import { Model } from '../models/Model';
import { Family } from '../models/Family';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FamilyServicesService {

  constructor(private http: HttpClient) { }

  public getFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>('/families').pipe(
      map((data) => data)
    );
  }

}
