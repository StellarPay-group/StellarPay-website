export function getUrlForDevice(): string {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            return 'https://play.google.com/store/apps/details?id=com.stellar.stellarai.app';
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            return 'https://apps.apple.com/ca/app/george/id6743195041';
          }
          if (/Macintosh|Mac OS X/.test(userAgent)) {
            return 'https://apps.apple.com/ca/app/george/id6743195041';
          }
          return 'https://play.google.com/store/apps/details?id=com.stellar.stellarai.app';
        }