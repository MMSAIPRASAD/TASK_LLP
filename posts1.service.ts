import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Posts1Service {


  constructor() { }
  ValidateUser(username,password){
    if(username=="CHINTU"&&password=="chintu"){
    return true;
    }
    else
    return false;
  }
}
