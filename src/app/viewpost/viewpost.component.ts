import { Component, OnInit } from '@angular/core';
import { Post } from '../postmodel';
import { ManagepostsService } from '../manageposts.service';
import { Globals } from '../global'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  posts: Post[];
  constructor(private service:ManagepostsService, public globals: Globals, 
    private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('isAdmin') === 'true')
      this.globals.isAdminLoggedIn = true;
    else 
      this.globals.isAdminLoggedIn = false;
    this.service.getAllPosts().subscribe( x => this.posts = x)
  }

  logout() {
    localStorage.setItem('isAdmin',"false");
    this.globals.isAdminLoggedIn = false;
    this._snackBar.open("Logged Out!", "Ok")
  }

  deletePost(id: number) {
    this.service.deletePostById(id).subscribe( (x: any) => {
      this._snackBar.open("Deleted!", "Ok");
      this.service.getAllPosts().subscribe( x => this.posts = x);
    });
  }

}
