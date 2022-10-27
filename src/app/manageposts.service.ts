import { Injectable } from '@angular/core';
import { Post, Admin, HashObject } from './postmodel';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagepostsService {

  baseURL: string = "http://localhost:3000/posts/"
  //posts:Post[];
  constructor(private http:HttpClient) { }

  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURL);
  }

  hashHelper(password: string): Observable<HashObject> {
    return this.http.get<HashObject>(`https://api.hashify.net/hash/md5/hex?value=${password}`);
  }

  getAdmin(): Observable<Admin[]> {
   return this.http.get<Admin[]>(`http://localhost:3000/adminUser`);
  }

  getPostById(id: Number): Observable<Post> {
    return this.http.get<Post>(this.baseURL+id)
  }

  deletePostById(id: Number) {
    return this.http.delete(this.baseURL+id);
  }

  addPost(requestBody: Post){
    return this.http.post(this.baseURL, requestBody);
  }

  editPost(requestBody: Post, id: Number){
    return this.http.put(this.baseURL+id, requestBody);
  }
}
