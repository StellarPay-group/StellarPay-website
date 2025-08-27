import { SERVER } from '@/backend_urls';
import axios, { isAxiosError } from 'axios';
import { ADMIN_TOKEN } from '@/middleware/adminToken';
import { count } from 'console';

const API_BASE_URL = `${SERVER}dev/conversion/`;

export const validateCountryCode = (countryCode: string) => {
          return countryCode.match(/^\+[0-9](?:[0-9]{0,2})$/);
}

export const validatePhoneNumber = (phoneNumber: string) => {
          return phoneNumber.match(/^[0-9]*$/) && phoneNumber.length === 10;
}

export async function sendAppLink(
          countryCode: string,
          phoneNumber: string,
          channel: 'sms'
): Promise<void> {
          if (!validateCountryCode(countryCode) || !validatePhoneNumber(phoneNumber)) {
                    return;
          }
          try {
                    let to: string = countryCode + '' + phoneNumber;
                    const response = await fetch(`${SERVER}dev/message/sms`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                              to,
                              from: "",
                              body: "Your money moves with you 🌍. Download StellarPay now and start sending in seconds. https://www.c2s.app/q/hXL6WV7"
                              })
                    });
                    const data = await response.json();
                    if (response.ok && data.sid) {
                              alert('Please check for a text message send to ' + to + ' to complete log in.');
                              return data.sid;
                    } else {
                              alert('Failed to send link SMS');
                              console.error('Failed to send link SMS:', data);
                              return;
                    }
          } catch (err) {
                    alert('Error sending link SMS');
                    console.error('Error sending link SMS:', err);
                    return;
          }
}

export async function sendLoginLink(
          countryCode: string,
          phoneNumber: string,
          channel: 'sms'
): Promise<void> {
          if (!validateCountryCode(countryCode) || !validatePhoneNumber(phoneNumber)) {
                    return;
          }
          try {
                    let to: string = countryCode + '' + phoneNumber;
                    const response = await fetch(`${SERVER}dev/message/sms`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                              to,
                              from: "",
                              body: "Welcome back 👋. Tap below to log in and get moving with StellarPay. https://www.c2s.app/q/hXL6WV7"
                              })
                    });
                    const data = await response.json();
                    if (response.ok && data.sid) {
                              alert('Please check for a text message send to ' + to + ' to complete log in.');
                              return data.sid;
                    } else {
                              alert('Failed to send link SMS');
                              console.error('Failed to send link SMS:', data);
                              return;
                    }
          } catch (err) {
                    alert('Error sending link SMS');
                    console.error('Error sending link SMS:', err);
                    return;
          }
}