import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UserRequest } from "../models/user-request";
import { UserResponse } from "../models/user-response";

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly http = inject(HttpClient);
  private readonly url: string = 'https://td-agile-backend-611823307251.europe-west1.run.app/api/user';

  public createUser(user: UserRequest ) {
    return this.http.post<UserResponse>(this.url, user);
  }

  public getUserByName(userName: string) {
    const params = new HttpParams().set('userName', userName);
    return this.http.get<UserResponse>(this.url, { params });
  }
}
