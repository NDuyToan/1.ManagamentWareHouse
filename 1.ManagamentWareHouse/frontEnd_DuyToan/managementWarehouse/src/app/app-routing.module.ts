import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { BrandComponent } from './pages/brand/brand.component';
// import { CategoryComponent } from './pages/category/category.component';
// import { ProductComponent } from './pages/product/product.component';
// import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'brand',
  //   loadChildren: () => import('./../app/pages/pages.module').then(m => m.PagesModule)
  // },
  // {
  //   path: 'category',
  //   component: CategoryComponent
  // },
  // {
  //   path: 'product',
  //   component: ProductComponent
  // },
  // {
  //   path: 'customer',
  //   component: CustomerComponent
  // },

];

@NgModule({
  declarations:[
    // CategoryComponent,
    // ProductComponent,
    // CustomerComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
