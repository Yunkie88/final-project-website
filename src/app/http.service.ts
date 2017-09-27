import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(public http : Http) { }
  getCategory(){
    return this.http.get(
    	'https://arcane-castle-88561.herokuapp.com/api/category')
    .map((res:Response) => res.json());
}

  addCategory(category){
	 console.log(category)
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(category);
    console.log(body)
    return this.http.post('https://arcane-castle-88561.herokuapp.com/api/category', 
    	body,
    	 options ).map((res: Response) => res.json()); 
}

  getProfile(){
    return this.http.get(
    	'https://arcane-castle-88561.herokuapp.com/api/profile')
    .map((res:Response) => res.json());
}

  addProfile(user){
	 console.log(user)
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    console.log(body)
    return this.http.post('https://arcane-castle-88561.herokuapp.com/api/profile', 
    	body,
    	 options ).map((res: Response) => res.json()); 
}

   addProduct(product){
	 console.log(product)
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    console.log(body)
    return this.http.post('https://arcane-castle-88561.herokuapp.com/api/category/:category_id/products', 
    	body,
    	 options ).map((res: Response) => res.json()); 
}

 deleteProfile(user){
 let headers= new Headers({ 'Content-Type': 'application/json' });
 let body= JSON.stringify(user);
 let options= new RequestOptions({headers:headers, body:body});

 this.http.delete('https://arcane-castle-88561.herokuapp.com/api/profile',
 	body,
 	options).subscribe((ok)=>{console.log(ok)});
}


}