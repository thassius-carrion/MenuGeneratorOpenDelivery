import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MerchantBasicInfoComponent } from '../merchant-basic-info.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter } from '@angular/core';
import { MerchantService } from 'src/app/module/service/merchant.service';


describe('MerchantBasicInfoComponent', () => {
  let router: Router
  let location: Location
  let component: MerchantBasicInfoComponent;
  let fixture: ComponentFixture<MerchantBasicInfoComponent>;
  const MENU_PATH: string = '/menu'
  const BACK_BUTTON: string = ".back"


  let merchantService = jasmine.createSpyObj('MerchantService', {
  }, {
    eventServiceActive: new EventEmitter<string>()
  })


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [MerchantBasicInfoComponent],
      providers: [{ provide: MerchantService, useValue: merchantService }],
    })
      .compileComponents();

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(MerchantBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.navigateByUrl(MENU_PATH)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should initially be the menu route and make it to the initial route`, async () => {
    expect(location.path()).toBe(MENU_PATH)
    let btnReturn: HTMLButtonElement = fixture.debugElement.query(By.css(BACK_BUTTON)).nativeElement

    btnReturn.click()

    fixture.detectChanges()

    //expect(location.path()).toBe(component.ROOT_PATH)
    
  })
});
