import { Component } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat-blog',
  templateUrl: './cat-blog.component.html',
  styleUrls: ['./cat-blog.component.scss'],
})
export class CatBlogComponent {
  catFact: any;
  catImageURL: any;

  constructor(private catSv: CatService) {
    this.getCatFact();
    this.getCatImage();
  }
  async getCatFact() {
    let result = await this.catSv.getCatFact();
    this.catFact = result;
    console.log(this.catFact);
  }

  async getCatImage() {
    let result = await this.catSv.getCatImage();
    this.catImageURL = result;
    console.log(this.catImageURL);
  }
}
