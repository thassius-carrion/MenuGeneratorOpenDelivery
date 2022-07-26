import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IMenu } from '../../models/menu';
import { MerchantService } from '../../service/merchant.service';
import { ItemOfferDetailsComponent } from '../item-offer-details/item-offer-details.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private merchantService: MerchantService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  private readonly widthItemOfferDetailsDialog: string = '750px'
  private readonly heightItemOfferDetailsDialog: string = '500px'
  private readonly customClass: string = 'custom-dialog';
  private readonly rootPath: string = '/'

  public readonly menus?: IMenu[] = this.merchantService.getMenus

  getCategoryById(categoryId: string | undefined) {
    return this.merchantService.getCategoryById(categoryId)
  }

  getItemById(itemId: string | undefined) {
    return this.merchantService.getItemById(itemId)
  }

  getItemOfferById(itemOfferId: string | undefined) {
    return this.merchantService.getItemOfferById(itemOfferId)
  }

  openItemOfferDetailsDialog(itemOfferId: string) {
    this.dialog.open(ItemOfferDetailsComponent,
      {
        data: itemOfferId,
        width: this.widthItemOfferDetailsDialog,
        height: this.heightItemOfferDetailsDialog,
        panelClass: this.customClass
      });
  }

  navigateToRoot() {
    this.router.navigateByUrl(this.rootPath);
  }

}
