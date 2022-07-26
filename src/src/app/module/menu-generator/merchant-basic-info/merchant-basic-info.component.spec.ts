import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchantBasicInfoComponent } from './merchant-basic-info.component';

describe('MerchantBasicInfoComponent', () => {
  let component: MerchantBasicInfoComponent;
  let fixture: ComponentFixture<MerchantBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchantBasicInfoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MerchantBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
