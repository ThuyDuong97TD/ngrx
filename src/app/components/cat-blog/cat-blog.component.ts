import { Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat-fact.model';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss'],
})
export class CatBlogComponent {
  @Input() cat!: Cat;


  constructor(private catSv: CatService) {

  }

}
