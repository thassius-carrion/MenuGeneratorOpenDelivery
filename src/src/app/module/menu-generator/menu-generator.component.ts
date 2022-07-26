import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFormSubmit } from '../models/form-submit';
import { IMerchant } from '../models/merchant';
import { MerchantService } from '../service/merchant.service';

@Component({
  selector: 'app-menu-generator',
  templateUrl: './menu-generator.component.html',
  styleUrls: ['./menu-generator.component.scss']
})
export class MenuGeneratorComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private merchantService: MerchantService, private router: Router) {
    this.form = this.formBuilder.group({
      json: [undefined, [Validators.nullValidator, Validators.required]]
    })
  }

  ngOnInit() {
  }

  private readonly menuPath = '/menu';
  readonly form: FormGroup<IFormSubmit>;
  get getFormControls() { return this.form.controls; }

  onSubmit(): void {
    try {
      const jsonString = this.getFormControls.json.value
      const merchant: IMerchant = JSON.parse(jsonString)
      this.merchantService.setMerchant(merchant)
      this.navigateToMenu();
    }
    catch (error) {
      console.error("ERROR:", error)
    }
  }

  navigateToMenu() {
    this.router.navigateByUrl(this.menuPath)
  }
}
