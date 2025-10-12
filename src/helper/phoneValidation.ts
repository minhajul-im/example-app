export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  formattedNumber?: string;
  operator?: string;
}

export const validateBangladeshiPhone = (
  phone: string
): PhoneValidationResult => {
  if (!phone) {
    return {
      isValid: false,
      error: "Phone number is required",
    };
  }

  const cleanPhone = phone?.replace(/[^\d+]/g, "");

  if (!cleanPhone || cleanPhone.length === 0) {
    return {
      isValid: false,
      error: "Phone number is required",
    };
  }

  let phoneNumber = cleanPhone.startsWith("+")
    ? cleanPhone.slice(1)
    : cleanPhone;

  if (phoneNumber.startsWith("880")) {
    phoneNumber = "0" + phoneNumber.slice(3);
  } else if (phoneNumber.startsWith("88")) {
    phoneNumber = "0" + phoneNumber.slice(2);
  }

  if (!phoneNumber.startsWith("01")) {
    return {
      isValid: false,
      error: "Phone number must start with 01 or +88",
    };
  }

  if (phoneNumber.length !== 11) {
    return {
      isValid: false,
      error: "Phone number must be 11 digits (01XXXXXXXXX)",
    };
  }

  if (!/^01\d{9}$/.test(phoneNumber)) {
    return {
      isValid: false,
      error: "Invalid phone number format",
    };
  }

  return {
    isValid: true,
    formattedNumber: phoneNumber,
    operator: "Mobile",
  };
};

export const formatPhoneNumber = (phone: string): string => {
  const validation = validateBangladeshiPhone(phone);

  if (!validation.isValid) {
    return phone;
  }

  const number = validation.formattedNumber!;
  return `${number?.slice(0, 4)} ${number?.slice(4, 7)} ${number?.slice(7)}`;
};
