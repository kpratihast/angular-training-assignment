import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ManagepostsService } from '../manageposts.service';
import { Post } from '../postmodel';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  
  //registerPost: FormGroup;
  newPost: Post = new Post();
  titleControl = new FormControl('Default Title');
  contentControl = new FormControl('');
  isVegControl = new FormControl('one');
  cookingTimeControl = new FormControl('5');
  authorControl = new FormControl('KP');
  options = this._formBuilder.group({
    title : this.titleControl,
    content : this.contentControl,
    isVeg: this.isVegControl,
    cookingTime: this.cookingTimeControl,
    author: this.authorControl
  });

  constructor(private _formBuilder: FormBuilder, private service: ManagepostsService,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(){
    
    let formData = this.options.value as unknown as Post;
    if (this.options.value.isVeg === "one") 
      formData.isVeg = true
    else
      formData.isVeg = false;
    formData.publishedOn = new Date().toDateString();
    formData.id = Math.ceil(Math.random()*1000);
    formData.cookingTime = formData.cookingTime + " mins"
    console.log(formData);

    this.service.addPost(formData).subscribe(x => {
      this._snackBar.open("Created!", "Ok");
      this.router.navigate([""]);
    })
  }



}
