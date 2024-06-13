import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-staking',
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
export class StakingComponent {

}
