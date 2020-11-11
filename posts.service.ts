import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
const URL='https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
 
  
getAll()
{
return this.http.get(URL);
}



}