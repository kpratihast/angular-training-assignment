import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagepostsService } from '../manageposts.service';
import { Post } from '../postmodel';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  id: number
  post: any
  options: FormGroup

  constructor(private _formBuilder: FormBuilder, private service: ManagepostsService,
    private _snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getPostById(this.id).subscribe( x => {
      this.post = x;
      this.post.isVeg = this.post.isVeg ? 'one' : 'two'
    });

    this.options = this._formBuilder.group({
      title : [''],
      author: [''],
      content: [''],
      isVeg: [''],
      cookingTime: ['']
    })
  }

  confirmEdit() {
    let formData = this.options.value as unknown as Post;
    if (this.options.value.isVeg === "one") 
      formData.isVeg = true
    else
      formData.isVeg = false;
    formData.publishedOn = new Date().toDateString();
    formData.id = this.id;
    formData.cookingTime = formData.cookingTime + " mins";
    console.log(formData);
    this.service.editPost(formData, this.id).subscribe( x => {
      this._snackBar.open("Edited!", "Ok");
      this.router.navigate([""]);
    })
  }


}
