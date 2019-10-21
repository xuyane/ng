import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Banner } from './data-types/common.types';
import { map } from 'rxjs/internal/operators'

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  constructor(private http: HttpClient) { }
  getBanners(pa): Observable<Banner[]> {
    return this.http.get('http://loalhost:3000/banner')
      .pipe(map((res: { banners: Banner[] }) => res.banners))
  }
}
