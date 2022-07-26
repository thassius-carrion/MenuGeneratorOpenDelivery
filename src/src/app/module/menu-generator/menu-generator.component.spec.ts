import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuGeneratorComponent } from './menu-generator.component';

describe('MenuValidatorComponent', () => {
  let component: MenuGeneratorComponent;
  let fixture: ComponentFixture<MenuGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuGeneratorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
