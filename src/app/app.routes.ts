// import { Routes } from '@angular/router';
// import { MainComponent } from './pages/main/main.component';
// import { UpgradeComponent } from './pages/upgrade/upgrade.component';
// import { ShopComponent } from './pages/shop/shop.component';

// export const routes: Routes = [
//     { path: '', component: MainComponent, pathMatch: 'full' },
//     { path: 'upgrade', component: UpgradeComponent },
//     { path: 'shop', component: ShopComponent },

// ];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/pages/main/main.component'; // Импортируй компонент главной страницы
import { ShopComponent } from '../app/pages/shop/shop.component'; // Импортируй компонент страницы Shop
import { UpgradeComponent } from '../app/pages/upgrade/upgrade.component'; // Импортируй компонент страницы Upgrade
import { StakingComponent } from '../app/pages/staking/staking.component'; // Импортируй компонент страницы Staking 

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Редирект на главную страницу
  { path: 'home', component: MainComponent }, 
  { path: 'shop', component: ShopComponent },
  { path: 'upgrade', component: UpgradeComponent },
  { path: 'staking', component: StakingComponent }, // Добавь маршрут для Staking
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
