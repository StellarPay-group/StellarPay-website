import { redirect } from "next/navigation";
import { DASHBOARD_SYNC_URL } from "@/backend_urls";

export const saveContactInfo = async (
  firstName: string,
  lastName: string,
  companyName: string,
  companyEmail: string,
  country: string,
  areaCode: string,
  phoneNumber: string
): Promise<void> => {
  if (!firstName || firstName.length < 2) {
    alert("First name must be at least 2 characters");
    return
  }
  if (!lastName || lastName.length < 2) {
    alert("Last name must be at least 2 characters");
    return;
  }
  if (!companyName || companyName.length < 2) {
    alert("Company name must be at least 2 characters");
    return;
  }

  if (
    !companyEmail ||
    companyEmail.indexOf("@") <= 0 ||
    companyEmail.lastIndexOf(".") < companyEmail.indexOf("@") + 2 ||
    companyEmail.lastIndexOf(".") === companyEmail.length - 1
  ) {
    alert('Email address is invalid')
    return;
  }

  if (!country || country === '') {
    alert('Please select country code')
    return;
  }
  if (!areaCode || areaCode === '') {
    alert('Please select phone country code');
    return;
  }

  const cleaned = phoneNumber.replace(/[()\-\*\+#]/g, "");
  if (!/^[0-9]+$/.test(cleaned) || cleaned === '' || cleaned.length < 5) {
    alert ('Phone number is invalid. Phone number must be at least 5 digits long, contain only digits, and NOT include the area code (e.g. +1)');
    return;
  }

  const signupData = {
    email: companyEmail,
    name: `${firstName} ${lastName}`,
    product: "Linq",
    areaCode: areaCode || '',
    phoneNumber: cleaned || '',
    companyName: companyName || '',
    country: country || '',
  };

  window.location.href = "/linq/thankyou";

  await fetch(`${DASHBOARD_SYNC_URL}create-signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
    keepalive: true,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
    })
    .catch((error) => {
      console.error('Error creating signup:', error);
      window.location.href = "/linq/contact";
    });
};


export const saveContactInfoEmailOnly = async (
  firstName: string,
  lastName: string,
  companyName: string,
  companyEmail: string,
  country: string,
  areaCode: string,
  phoneNumber: string
): Promise<void> => {
  if (!firstName || firstName.length < 2) {
    alert("First name must be at least 2 characters");
    return
  }
  if (!lastName || lastName.length < 2) {
    alert("Last name must be at least 2 characters");
    return;
  }
  if (!companyName || companyName.length < 2) {
    alert("Company name must be at least 2 characters");
    return;
  }

  if (
    !companyEmail ||
    companyEmail.indexOf("@") <= 0 ||
    companyEmail.lastIndexOf(".") < companyEmail.indexOf("@") + 2 ||
    companyEmail.lastIndexOf(".") === companyEmail.length - 1
  ) {
    alert('Email address is invalid')
    return;
  }

  if (!country || country === '') {
    alert('Please select country')
    return;
  }

  const signupData = {
    email: companyEmail,
    name: `${firstName} ${lastName}`,
    product: "Linq",
    areaCode: areaCode || '',
    phoneNumber: phoneNumber || '',
    companyName: companyName || '',
    country: country || '',
  };

  window.location.href = "/linq/thankyou";

  await fetch(`${DASHBOARD_SYNC_URL}create-signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
    keepalive: true,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
    })
    .catch((error) => {
      console.error('Error creating signup:', error);
      window.location.href = "/linq/contact";
    });
};
