import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[] = [
    {title: 'Вивчаю компоненти', text: 'Створюю проект "Блог"', id: 1},
    {title: 'Вивчаю директиви', text: 'Все ще створюю "Блог"', id: 2}
  ];

  updatePosts(newPost: Post) {
    this.posts.unshift(newPost);
  }

  deletePost(deletedPostId: number) {
    this.posts = this.posts.filter(post => post.id !== deletedPostId);
  }
}
