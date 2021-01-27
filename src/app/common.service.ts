import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
showAllUser(){
  return this._http.get("http://localhost:3000/Users");
};
  insertUser(users){
    return this._http.post("http://localhost:3000/Users",users);
  };
  updateUser(users){
    return this._http.put("http://localhost:3000/Users/"+ users.id,users);
  };
  deleteUser(users){
    return this._http.delete("http://localhost:3000/Users/"+ users.id);
  };

}
