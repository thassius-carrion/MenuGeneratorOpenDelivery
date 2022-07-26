import { Component, OnInit } from '@angular/core';
import { IBasicInfo } from '../../models/basic-info';
import { IService } from '../../models/service';
import { MerchantService } from '../../service/merchant.service';

@Component({
  selector: 'app-merchant-details',
  templateUrl: './merchant-details.component.html',
  styleUrls: ['./merchant-details.component.scss']
})
export class MerchantDetailsComponent implements OnInit {

  constructor(private merchantService: MerchantService) { }

  public readonly basicInfo?: IBasicInfo = this.merchantService.getBasicInfo
  public readonly services?: IService[] = this.merchantService.getServices

  ngOnInit(): void {
  }

}
