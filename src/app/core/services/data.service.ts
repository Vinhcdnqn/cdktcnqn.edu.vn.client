import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants } from './../common/system.constants';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { MessageContstants } from './../common/message.constants';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(
    private _http: Http,
    private _router: Router,
    private _authenService: AuthenService,
    private _notificationService: NotificationService,
    private _utilityService: UtilityService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getByID(uri: string, ID: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    var paramStr: string = 'ID' + '=' + ID;
    return this._http.get(SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers }).pipe(map(this.extractData));
  }

  get(uri: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + uri, { headers: this.headers }).pipe(map(this.extractData));
  }

  getByValue(uri: string, values: any[]){
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    let myParams = new URLSearchParams();
    for (var item of values) {
      myParams.append(item.key, item.value);
    }
    let options = new RequestOptions({ headers: myHeaders, params: myParams });
    return this._http.get(SystemConstants.BASE_API + uri, options).pipe(map((response: Response) => <any>response.json()));
  }

  post(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).pipe(map(this.extractData));
  }

  put(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers }).pipe(map(this.extractData));
  }

  delete(uri: string, key: string, id: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers })
    .pipe(map(this.extractData));
  }

  deleteWithMultiParams(uri: string, params) {
    this.headers.delete('Authorization');
    this.headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    var paramStr: string = '';
    for (let param in params) {
      paramStr += param + "=" + params[param] + '&';
    }
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + paramStr, { headers: this.headers })
    .pipe(map(this.extractData));
  }

  postFile(uri: string, data?: any) {
    let formData: FormData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append(data[i].name, data[i], data[i].name);
    }
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    let options = new RequestOptions({ headers: headers });
    return this._http.post(SystemConstants.BASE_API + uri, formData, options)
    .pipe(map(this.extractData));
  }

  putFile(uri: string, ID: number, data?: any) {
    let formData: FormData = new FormData();
    for (let i = 0; i < data.length; i++) {
      formData.append(data[i].name, data[i], data[i].name);
    }
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + this._authenService.getLoggedInUser().access_token);
    let options = new RequestOptions({ headers: headers });
    var paramStr: string = 'ID' + '=' + ID;
    return this._http.put(SystemConstants.BASE_API + uri + '/?' + paramStr, formData, options)
    .pipe(map(this.extractData));
  }

  displayPDF(url: string, ID: string) {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var paramStr: string = 'ID' + '=' + ID;
    let options = new RequestOptions({ headers: myHeaders, responseType: ResponseContentType.Blob });
    return this._http.get(SystemConstants.BASE_API + url + '/?' + paramStr, options).pipe(map(
      (res) => {
        return new Blob([res.blob()], { type: 'application/pdf' });
      }));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageContstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else if (error.status == 403) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageContstants.FORBIDDEN);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = JSON.parse(error._body).Message;
      this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }


  }
}
