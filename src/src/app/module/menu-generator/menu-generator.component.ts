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

  public readonly FORM_LABEL: string = "COPY YOUR JSON TEXT HERE:"
  public readonly BUTTON_GENERATE_MENU: string = "Generate Menu"
  public readonly MENU_PATH: string = '/menu';

  public readonly JSON_INVALID_MESSAGE: string = "Error parsing JSON, JSON data is incomplete. Please, try again.";

  public showError: boolean = false;

  readonly form: FormGroup<IFormSubmit>;
  get getFormControls() { return this.form.controls; }

  onSubmit(): void {
    try {
      const jsonString = this.getFormControls.json.value
      
      const merchant: IMerchant = JSON.parse(jsonString)
      this.merchantService.setMerchant(merchant)
      this.navigateToMenu();
    }
    catch (error: any) {
      this.showError = true;
      throw Error(error)    
    }
  }

  navigateToMenu(): void {
    this.router.navigateByUrl(this.MENU_PATH)
  }
}
