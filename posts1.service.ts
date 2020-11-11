import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Posts1Service {

  constructor() { }
  ValidateUser(uname,pwd){
    return true;
  }
}
