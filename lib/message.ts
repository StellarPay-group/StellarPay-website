import { SERVER } from '@/backend_urls';
import axios, { isAxiosError } from 'axios';
import { ADMIN_TOKEN } from '@/middleware/adminToken';
import { count } from 'console';
import { TWILIO_PHONE_NUMBER } from '@/middleware/twilioPhoneNumber';

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
                    alert('The country code or phone number you entered is invalid. Please check the format of the country code (must start with "+", like "+1", "+236", etc.) and phone number (digits only, like "8002223333"). ')
                    return;
          }
          try {
                    let to: string = countryCode + '' + phoneNumber;
                    alert('A link will be sent to your phone number. Please check for a text message sent to ' + to + ' to download the app.');
                    const response = await fetch(`${SERVER}dev/message/sms`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                              to,
                              from: TWILIO_PHONE_NUMBER,
                              body: "Your money moves with you 🌍. Download StellarPay now and start sending in seconds. https://www.c2s.app/q/hXL6WV7"
                              })
                    });
                    const data = await response.json();
                    if (response.ok && data.sid) {
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
                    alert('The country code or phone number you entered is invalid. Please check the format of the country code (must start with "+", like "+1", "+236", etc.) and phone number (digits only, like "8002223333"). ')
                    return;
          }
          try {
                    let to: string = countryCode + '' + phoneNumber;
                    alert('A link will be sent to your phone number. Please check for a text message sent to ' + to + ' to complete log in.');
                    const response = await fetch(`${SERVER}dev/message/sms`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                              to,
                              from: TWILIO_PHONE_NUMBER,
                              body: "Welcome back 👋. Tap below to log in and get moving with StellarPay. https://www.c2s.app/q/hXL6WV7"
                              })
                    });
                    const data = await response.json();
                    if (response.ok && data.sid) {
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