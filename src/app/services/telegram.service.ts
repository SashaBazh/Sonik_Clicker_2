import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

// interface TgButton {
//   show(): void;
//   hide(): void;
//   onClick(fn: Function): void;
//   offClick(fn: Function): void;
// }

@Injectable({
  providedIn: 'root',
})

export class TelegramService {
  private window: any;
  tg: any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.window = this._document.defaultView;
    if (this.window && this.window.Telegram && this.window.Telegram.WebApp) {
      this.tg = this.window.Telegram.WebApp;
    } else {
      console.error('Telegram WebApp SDK is not loaded or not available.');
    }
  }

  get MainButton() {
    if (this.tg) {
      return this.tg.MainButton;
    } else {
      console.error('Telegram WebApp is not initialized.');
      return {
        show: () => {},
        hide: () => {},
        setText: (text: string) => {},
      };
    }
  }

  // get BackButton(): TgButton {
  //   return this.tg.BackButton;
  // }

  // ready() {
  //   this.tg.ready();
  // }
}































// import { Injectable, Inject} from '@angular/core';
// import { DOCUMENT } from '@angular/common';

// interface TgButton {
//   show(): void;
//   hide(): void;
//   setText(text: string): void;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class TelegramService {
//   private window;
//   tg;

//   constructor(@Inject(DOCUMENT) private _document) {
//     this.window = this._document.defaultView;
//     this.tg = this.window.Telegram.WebApp;
//   }

//   getUser() {
//     if (this.tg && this.tg.initDataUnsafe && this.tg.initDataUnsafe.user) {
//       return this.tg.initDataUnsafe.user;
//     } else {
//       console.error('User data is not available.');
//       return null;
//     }
//   }

  // get MainButton(): TgButton {
  //   return this.tg.MainButton;
  // }

// import { Injectable, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

// interface TgButton {
//   show(): void;
//   hide(): void;
//   setText(text: string): void;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class TelegramService {
//   private window: any;
//   tg: any;

//   constructor(@Inject(DOCUMENT) private _document: Document) {
//     this.window = this._document.defaultView;
//     if (this.window && this.window.Telegram) {
//       this.tg = this.window.Telegram.WebApp;
//     } else {
//       console.error('Telegram WebApp SDK is not loaded.');
//     }
//   }

//   get MainButton(): TgButton {
//     if (this.tg) {
//       return this.tg.MainButton;
//     } else {
//       console.error('Telegram WebApp is not initialized.');
//       return {
//         show: () => {},
//         hide: () => {},
//         setText: (text: string) => {},
//       } as TgButton;
//     }
//   }
// }