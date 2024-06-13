import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="footer">
    <button class="footer-item" [routerLink]="['']" routerLinkActive="active"> 
      <i class="fas fa-university"></i>
      <span>Home</span>
    </button>
    <button class="footer-item" [routerLink]="['/upgrade']" routerLinkActive="active">
      <i class="fas fa-users"></i>
      <span>Upgrade</span>
    </button>
    <button class="footer-item" [routerLink]="['/shop']" routerLinkActive="active">
      <i class="fas fa-bolt"></i>
      <span>Shop</span>
    </button>
    <button class="footer-item" [routerLink]="['/staking']" routerLinkActive="active"> 
      <i class="fas fa-parachute-box"></i>
      <span>STAKING</span>
    </button>
  </div>
    `,
})

// export class ShopComponent implements OnInit, OnDestroy{
//   // roter: any;
//   // constructor(
//   //   private telegram: TelegramService,
//   //   private router: Router,
//   // )
//   // {
//   //   this.goBack = this.goBack.bind(this);
//   // }
//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   // goBack() {
//   //   this.router.navigate(['/'])
//   // }

//   // ngOnInit(): void {
//   //   this.telegram.BackButton.show();
//   //   this.telegram.BackButton.onClick(this.goBack);
//   // }

//   // ngOnDestroy(): void {
//   //   this.telegram.BackButton.offClick(this.goBack);
//   // }
  
// }

export class ShopComponent{
}