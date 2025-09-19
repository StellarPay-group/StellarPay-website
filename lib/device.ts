export function getUrlForDevice(showPopup: () => void) {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            window.open('https://play.google.com/store/apps/details?id=com.stellar.stellarai.app');
            return;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.open('https://apps.apple.com/ca/app/george/id6743195041');
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
            window.open('https://play.google.com/store/apps/details?id=com.stellar.stellarai.app');
            return;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.open('https://apps.apple.com/ca/app/george/id6743195041');
            return;
          }
          window.open('https://apps.apple.com/ca/app/george/id6743195041');
          return;
        }