import { useState, useCallback } from "react";
import { validateBangladeshiPhone } from "@/helper/phoneValidation";

export const usePhoneValidation = () => {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const handlePhoneChange = useCallback((value: string) => {
    setPhone(value);
    setTouched(true);
  }, []);

  const handleBlur = useCallback(() => {
    setTouched(true);
  }, []);

  const validation = validateBangladeshiPhone(phone);
  const isValid = validation.isValid;
  const error = touched && !isValid ? validation.error : undefined;

  return {
    phone,
    touched,
    handlePhoneChange,
    handleBlur,
    isValid,
    error,
  };
};
