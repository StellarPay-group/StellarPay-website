"use client";
function getUrl() {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.stellar.stellarai.app';
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.location.href = 'https://apps.apple.com/ca/app/george/id6743195041';
          }
          if (/Macintosh|Mac OS X/.test(userAgent)) {
                    window.location.href = 'https://apps.apple.com/ca/app/george/id6743195041';
          }
          window.location.href = 'https://play.google.com/store/apps/details?id=com.stellar.stellarai.app';
}
export default function Download() {
          getUrl()
}