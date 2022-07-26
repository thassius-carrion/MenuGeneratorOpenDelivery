import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBasicInfo } from '../../models/basic-info';
import { MerchantService } from '../../service/merchant.service';
import { MerchantDetailsComponent } from '../merchant-details/merchant-details.component';

@Component({
  selector: 'app-merchant-basic-info',
  templateUrl: './merchant-basic-info.component.html',
  styleUrls: ['./merchant-basic-info.component.scss']
})
export class MerchantBasicInfoComponent implements OnInit {

  constructor(private merchantService: MerchantService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  public readonly basicInfo?: IBasicInfo = this.merchantService.getBasicInfo

  private readonly widthMerchantDetailsDialog = '500px'
  private readonly heightMerchantDetailsDialog = '500px'


  openMerchantDetailsDialog() {
    this.dialog.open(MerchantDetailsComponent,
      {
        width: this.widthMerchantDetailsDialog,
        height: this.heightMerchantDetailsDialog
      });
  }
}
