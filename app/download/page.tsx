"use client";
import { useEffect } from "react";
function getUrl() {
          const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
          if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.stellar.mobile';
            return;
          }
          if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            window.location.href = 'https://apps.apple.com/app/stellarpay/id6450455712';
            return;
          }
          if (/Macintosh|Mac OS X/.test(userAgent)) {
                    window.location.href = 'https://apps.apple.com/app/stellarpay/id6450455712';
                    return;
          }
          window.location.href = 'https://play.google.com/store/apps/details?id=com.stellar.mobile';
}
export default function Download() {
          useEffect(() => {
                    getUrl()
          }, [])
}