import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit, OnDestroy {
  @Input('toPost')
  myPost!: Post;

  @Output()
  onRemove: EventEmitter<number> = new EventEmitter<number>();

  ngOnDestroy(): void {
    console.log('метод ngOnDestroy');
  }

  ngOnInit(): void {
  }

  removePost() {
    this.onRemove.emit(this.myPost.id);
  }
}
