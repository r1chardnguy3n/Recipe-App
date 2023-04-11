import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCuisineCardComponent } from './category-cuisine-card.component';

describe('CategoryCuisineCardComponent', () => {
  let component: CategoryCuisineCardComponent;
  let fixture: ComponentFixture<CategoryCuisineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCuisineCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCuisineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
