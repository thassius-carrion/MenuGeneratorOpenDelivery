import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemOfferDetailsComponent } from './item-offer-details.component';

describe('ItemOfferDetailsComponent', () => {
  let component: ItemOfferDetailsComponent;
  let fixture: ComponentFixture<ItemOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemOfferDetailsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
