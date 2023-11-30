import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/loginPage', pathMatch: 'full'},
  {path: 'homePage', component:HomePageComponent},
  {path: 'registerPage', component:RegisterPageComponent},
  {path: 'historyPage', component: HistoryPageComponent},
  {path: 'paymentPage', component: PaymentPageComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {path: 'invoicePage', component: InvoicePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }