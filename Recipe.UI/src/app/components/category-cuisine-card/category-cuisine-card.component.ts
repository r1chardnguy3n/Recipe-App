import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-cuisine-card',
  templateUrl: './category-cuisine-card.component.html',
  styleUrls: ['./category-cuisine-card.component.scss']
})
export class CategoryCuisineCardComponent {
  @Input() title: string = "";
  @Input() imageUrl: string = "";
  @Input() id: string = "";
}
