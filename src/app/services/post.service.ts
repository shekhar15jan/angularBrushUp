import { Injectable } from "@angular/core";
import { Post } from "../modules/post";

@Injectable({
    providedIn: 'root',
})
export class PostService{
    postArray: Array<Post> = [
        {id: 1, name: 'post 1'},
        {id: 2, name: 'post 2'},
        {id: 3, name: 'post 3'},
        {id: 4, name: 'post 4'},
        {id: 5, name: 'post 5', date: new Date(2000)},
        {id: 6, name: 'post 6'},
        {id: 7, name: 'post 7'},
        {id: 8, name: 'post 8', date: new Date(2000)},
        {id: 9, name: 'post 9'},
        {id: 10, name: 'post 10'}
    ]

    addPost(post: any) {
        this.postArray.push(post);
    }
}