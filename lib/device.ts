export function getUrlForDevice(showPopup: () => void) {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/dev?id=8934712149181103165');
            return;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.open('https://apps.apple.com/app/stellarpay/id6450455712');
            return;
          }
          showPopup();
        }

export function getDeviceType(): number {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            return 2;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            return 1;
          }
          return 0;
        }

export function getUrl() {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/dev?id=8934712149181103165');
            return;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.open('https://apps.apple.com/app/stellarpay/id6450455712');
            return;
          }
          window.open('https://apps.apple.com/app/stellarpay/id6450455712');
          return;
        }