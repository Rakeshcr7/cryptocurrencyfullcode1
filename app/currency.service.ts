import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // apiKey = 'd8f69e9c-7fb5-4617-bd78-59aeee1f2403';
  public Currency: any
  public result: any
  constructor(private _http: HttpClient) { }

  public getAllCurrency(): any {
    let params = new HttpParams({}).append('CMC_PRO_API_KEY','afaa9fcb-d0b4-4ec7-a315-1d358c3b37f0')
    let headers = new HttpHeaders()
    headers.set('Content-Type', 'application/json; charset=utf-8');    
    // let headers = new HttpHeaders({'X-CMC_PRO_API_KEY':'afaa9fcb-d0b4-4ec7-a315-1d358c3b37f0','Access-Control-Allow-Origin':'*'})    
    // let headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'}).set('X-CMC_PRO_API_KEY','afaa9fcb-d0b4-4ec7-a315-1d358c3b37f0')
    // headers.append('X-CMC_PRO_API_KEY' , 'd8f69e9c-7fb5-4617-bd78-59aeee1f2403')
    let res = this._http.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {params, headers})
    return res;
  }
}

 