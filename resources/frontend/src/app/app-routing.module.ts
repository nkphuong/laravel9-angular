import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./producDetail/product-detail.component";

const routes: Routes = [
    // { path: '',   redirectTo: '/product', pathMatch: 'full' },
    { path: 'product', component: ProductComponent },
    { path: 'product/detail/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
