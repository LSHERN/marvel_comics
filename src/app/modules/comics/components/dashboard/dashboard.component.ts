import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComicsModule } from '../../comics.module';
import { ComicsService } from '../../services/comics.service';
import { CardComicComponent } from "../card-comic/card-comic.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ComicsModule, CardComicComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  values: any[] = []

  constructor(private router: Router, private readonly comicService:ComicsService) {
    if (!this.validateToken()) {
      this.router.navigate(["auth", "login"])
    }
    this.fetchComics();
  }

  fetchComics():void {
    this.comicService.fetchAllComics().subscribe({
      next:(response: any) => {
        this.values = response.data.results;
        console.log(response.data.results)
      }
    })
  }

  generateUrlImage(comic: any):string | undefined {
    if (comic.images.length > 0) {
      return `${comic.images[0].path}.${comic.images[0].extension}`;
    }
    
    return undefined;
  }

  validateToken():boolean {
    return true;
  }
}
