import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MerchantDetailsComponent } from './merchant-details/merchant-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuGeneratorComponent } from './menu-generator.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { MerchantBasicInfoComponent } from './merchant-basic-info/merchant-basic-info.component';
import { ItemOfferDetailsComponent } from './item-offer-details/item-offer-details.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    MenuGeneratorComponent,
    MerchantDetailsComponent,
    MenuComponent,
    MerchantBasicInfoComponent,
    ItemOfferDetailsComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule
  ]
})
export class MenuGeneratorModule { }
