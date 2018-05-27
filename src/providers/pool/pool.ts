import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';

/*
  Generated class for the PoolProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoolProvider {
  headers;
  options;
  constructor(public http: Http) {
    this.headers = new Headers( { 'Content-Type': 'application/json' } )
    this.options = new RequestOptions( { withCredentials: true, headers: this.headers } )

  }

  getMyPools() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    if (!currentUser) {
      console.log('pool.ts, currentUser Not found, ');
    } else {
      return this.http.post('http://localhost:3000/query', {
        query: "SELECT * FROM foodpool.pool where user_id  = " + currentUser.id + " AND status = 1 ;" }, this.options)
    }
  }

  getAvailablePools() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    if (!currentUser) {
      console.log('pool.ts, currentUser Not found, ');
    } else {
      return this.http.post('http://localhost:3000/query', {
        query: "SELECT * FROM foodpool.pool where user_id  != " + currentUser.id + " AND status = 1 ;" }, this.options)
    }
  }

  addPool(title, persons, status = 1) {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    if (!currentUser) {
      console.log('pool.ts, currentUser Not found, ');
    } else {
      let quer = "INSERT INTO pool (`title`, `persons`, `user_id`, `status`) values ('" + title + "', " + parseInt(persons) + ", " + currentUser.id + " ,  " + status + ")";
      console.log(quer)
      return this.http.post('http://localhost:3000/query', {
        query: quer }, this.options)
        
    }
         
  }
}
