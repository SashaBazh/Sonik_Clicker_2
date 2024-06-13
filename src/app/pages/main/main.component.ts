import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ActivatedRoute, RouterLink, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="container">
  <div class="header">
  <!-- <span class="hello">HELLO sasha</span>  -->
  <span class="hello">HELLO {{ username }}</span>
    <span class="nft-free">⚡ MY NFT FREE</span>
  </div>
  <div class="action-container">
    <button class="referral-link"><i class="fas fa-qrcode"></i> REFERRAL LINK</button>
    <div class="language-switch">EN</div>
    <button class="upgrade">UPGRADE</button>
  </div>

  <div class="balance-container">
    <div class="energy-balance">
      <p class="balance-title">TODAY ENERGY BALANCE</p>
      <p class="balance-value"><i class="fas fa-bolt"></i>⚡5</p>
    </div>
    <div class="total-balance">
      <p class="balance-title">BTS TOTAL BALANCE <span class="airdrop">AIRDROP</span></p>
      <p class="balance-amount"> 23 SAT</p>
    </div>
  </div>

  <div class="autoclicker-container">
    <div class="header">
      <div class="autoclicker">
        <span>AUTOCLICKER</span>
        <div class="buttons">
          <button class="on">ON</button>
          <button class="off">OFF</button>
        </div>
      </div>
      <div class="leaderboard">
        <i class="fas fa-trophy"></i> LEADERBOARD
      </div>
    </div>
    <!-- <div class="sonic-image" (click)="onImageClick($event)">
      <img src="../../../assets/Images/Sonic.png" alt="Sonic">
      <div class="coins-container" #coinsContainer></div>
    </div> -->
    <div class="promotion">
      SPRING <br>PROMOTION <i class="fas fa-arrow-right"></i>
    </div>
    <div class="progress-container">
      <div class="progress-bar">
        <span class="progress-text">TAPS LEFT: ⚡<i class="fas fa-bolt"></i> 999</span>
        <div class="progress">
          <div class="progress-fill"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="footer-item" [routerLink]="['/home']" routerLinkActive="active"> 
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
  </div>
    <!-- <div class="sonic-image" (click)="showCoins($event)"> -->
      <!-- <img src="../../../../src/assets/Images/Sonic.png" alt="Sonic"> -->
      <!-- <div class="coins-container" *ngFor="let coin of coins" [ngStyle]="{'top.px': coin.y, 'left.px': coin.x}">
        <img src="../../assets/Images/coin.png" alt="Coin" class="coin">
      </div> -->
    `,
    styleUrls: ['./main.component.css'] // Указываем путь к файлу CSS
})

// export class MainComponent {
//   telegram = inject(TelegramService);
//   username: string | null = null;

//   // constructor() {
//   //   this.telegram.BackButton.hide();

//   // }

  
// }

export class MainComponent {
  username: string | null = null;

  // @ViewChild('coinsContainer', { static: false }) coinsContainer!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     this.username = params['username'] || 'User';
  //   });
  }

  // onImageClick(event: MouseEvent) {
  //   const coin = document.createElement('div');
  //   coin.className = 'coin';

  //   const x = event.clientX - this.coinsContainer.nativeElement.getBoundingClientRect().left;
  //   const y = event.clientY - this.coinsContainer.nativeElement.getBoundingClientRect().top;

  //   coin.style.left = `${x}px`;
  //   coin.style.top = `${y}px`;

  //   this.coinsContainer.nativeElement.appendChild(coin);

  //   setTimeout(() => {
  //     this.coinsContainer.nativeElement.removeChild(coin);
  //   }, 1000); // Удаляем монетку через 1 секунду после анимации
  // }


