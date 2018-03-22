import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }


  getAuthors(){
      return this._http.get('/authors')
  }


  addAuthor(newAuthor){
      return this._http.post('/authors/new', newAuthor)
  }


  submitAuthor(id, data) {
      return this._http.put('/authors/update/'+id, data)
  }


  deleteAuthor(id){
      return this._http.delete('/authors/remove/'+id)
  }


  findAuthor(id){
      return this._http.get('/authors/'+id)
  }

}
