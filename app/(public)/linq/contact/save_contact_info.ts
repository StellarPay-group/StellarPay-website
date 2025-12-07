import { redirect } from "next/navigation";

export const saveContactInfo = (
  firstName: string,
  lastName: string,
  companyName: string,
  companyEmail: string,
  country: string,
  phoneNumber: string
): void => {
          console.log('firstName: ' + firstName)
          console.log('lastName: ' + lastName)
          console.log('companyName: ' + companyName)
          console.log('companyEmail: ' + companyEmail)
          console.log('country: ' + country)
          console.log('phoneNumber: ' + phoneNumber)
  redirect("/linq/thankyou");
};
