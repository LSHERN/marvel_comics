import { Component, Input, input } from '@angular/core';
import { ComicsModule } from '../../comics.module';

@Component({
  selector: 'app-card-comic',
  standalone: true,
  imports: [ComicsModule],
  templateUrl: './card-comic.component.html',
  styleUrl: './card-comic.component.scss'
})
export class CardComicComponent {

  @Input()
  title: string = "";
  @Input()
  description: string = "";
  @Input()
  urlImage: string | undefined;
}
