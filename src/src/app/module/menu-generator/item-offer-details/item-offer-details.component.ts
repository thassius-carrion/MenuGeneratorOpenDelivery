import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IItem } from '../../models/item';
import { IItemOffer } from '../../models/item-offer';
import { MerchantService } from '../../service/merchant.service';

@Component({
  selector: 'app-item-offer-details',
  templateUrl: './item-offer-details.component.html',
  styleUrls: ['./item-offer-details.component.scss']
})
export class ItemOfferDetailsComponent implements OnInit {

  constructor(private merchantService: MerchantService, @Inject(MAT_DIALOG_DATA) private itemOfferId: string, private itemOfferDetails: MatDialog) { }

  public readonly itemOffer?: IItemOffer = this.merchantService.getItemOfferById(this.itemOfferId)
  public readonly item?: IItem = this.merchantService.getItemById(this.itemOffer?.itemId)

  ngOnInit(): void {
  }

  closeItemOfferDetails() {
    this.itemOfferDetails.closeAll()
  }

  getOptionGroupById(optionGroupId: string) {
    return this.merchantService.getOptionGroupById(optionGroupId);
  }

  getItemById(itemId: string | undefined) {
    return this.merchantService.getItemById(itemId)
  }

}
