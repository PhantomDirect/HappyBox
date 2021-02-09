import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutOrderComponent } from './about-order/about-order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { StockComponent } from './stock/stock.component';
import { ToCorporativeClientComponent } from './to-corporative-client/to-corporative-client.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'to-corporative-client', component: ToCorporativeClientComponent},
      {path: 'stock', component: StockComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'about-order', component: AboutOrderComponent},
      {path: 'contacts', component: ContactsComponent},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
