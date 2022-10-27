import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ManagepostsService } from './manageposts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from './postmodel';


describe('ManagepostsService', () => {
  let service: ManagepostsService;
  let controller: HttpTestingController;
  let baseURL: string = "http://localhost:3000/posts/"
  const expectedData: Post[] = [
    {
      "title": "1st Entry",
      "author": "Kshitij Pratihast",
      "content": "This is a sample food blog post. Manually edited as well",
      "isVeg": false,
      "cookingTime": "23 mins",
      "publishedOn": "Thu Oct 27 2022",
      "id": 1
    },
    {
      "title": "2nd Entry",
      "author": "Kshitij Pratihast",
      "content": "This is a sample food blog post. Manually edited as well",
      "isVeg": true,
      "cookingTime": "45 mins",
      "publishedOn": "Wed Oct 26 2022",
      "id": 2
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(ManagepostsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test GET API call to get all blog posts',() => {
    service.getAllPosts().subscribe((val) => {
      expect(val).toEqual(expectedData);
    });
    const req = controller.expectOne({
      method: 'GET',
      url: `${baseURL}`
    });
    req.flush(expectedData);
  })

  it('test GET API call to get blog post by Id',() => {
    service.getPostById(1).subscribe((val) => {
      expect(val).toEqual(expectedData[0]);
    });
    const req = controller.expectOne({
      method: 'GET',
      url: `${baseURL}1`
    });
    req.flush(expectedData[0]);
  })

  it('test PUT API call to update blog post by Id',() => {
    const updatedPost: Post = {
      title: "2nd Entry - Updated",
      author: "Kshitij Pratihast",
      content: "This is a sample food blog post. Manually edited as well",
      isVeg: true,
      cookingTime: "45 mins",
      publishedOn: "Wed Oct 26 2022",
      id: 2

    }
    service.editPost(updatedPost, 2).subscribe((val) => {
      expect(val).toEqual(updatedPost);
    });
    const req = controller.expectOne({
      method: 'PUT',
      url: `${baseURL}2`

    });
    req.flush(updatedPost);
  });

  it('test POST API call to add a new blog post',() => {
    const newPost: Post = {
      title: "3rd Entry - New",
      author: "Kshitij Pratihast",
      content: "This is a sample food blog post. Manually edited as well",
      isVeg: true,
      cookingTime: "45 mins",
      publishedOn: "Wed Oct 26 2022",
      id: 3

    }
    service.addPost(newPost).subscribe((val) => {
      expect(val).toEqual(newPost);
    });
    const req = controller.expectOne({
      method: 'POST',
      url: `${baseURL}`

    });
    req.flush(newPost);
  });

  it('test DELETE API call to delete a blog post',() => {
    service.deletePostById(2).subscribe((val) => {
      expect(val).toEqual(expectedData[0]);
    });
    const req = controller.expectOne({
      method: 'DELETE',
      url: `${baseURL}2`

    });
    req.flush(expectedData[0]);
  })
});


