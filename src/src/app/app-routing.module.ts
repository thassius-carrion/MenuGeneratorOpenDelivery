import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuGeneratorComponent } from './module/menu-generator/menu-generator.component';
import { MenuComponent } from './module/menu-generator/menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuGeneratorComponent, title: "Open Delivery - Menu Generator" },
  { path: 'menu', component: MenuComponent, title: "Open Delivery - Menu Generator" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
