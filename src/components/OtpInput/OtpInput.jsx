import React, { useState, useRef, useEffect } from "react";
import "./OtpInput.css";
import { isEmpty } from "../../Utils/common";

const OtpInput = ({
  type,
  otp = ["", "", "", ""],
  setOtp = () => {},
  isDisable = false,
  placeholder = "",
  number = true,
  caseText = "upper",
  onKeyDown,
  inputRefs,
}) => {
  const [focus, setFocus] = useState(null);

  // it will focus on first input when we refresh page or when its mounted for first time.
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [inputRefs]);

  // Detect and handle autofill inputs
  useEffect(() => {
    const handleAutoFill = () => {
      const activeInput = document.activeElement;
      const isInputFromThisComponent = inputRefs.current.includes(activeInput);

      if (isInputFromThisComponent) {
        const activeIndex = inputRefs.current.findIndex(
          (input) => input === activeInput
        );

        if (activeIndex !== -1) {
          const inputValue = activeInput.value;

          if (inputValue && inputValue.length > 1) {
            let pattern = number ? /^[0-9]*$/ : /^[a-zA-Z0-9]*$/;
            if (!pattern.test(inputValue)) return;

            if (
              document.visibilityState === "visible" &&
              activeInput === document.activeElement
            ) {
              const filledDigitsCount = otp
                .slice(0, activeIndex)
                .filter((d) => d !== "").length;
              let newValue = "";

              for (let i = 0; i < filledDigitsCount; i++) {
                newValue += otp[i];
              }

              newValue += inputValue;
              newValue = newValue.substring(0, otp.length);

              const updatedOtp = [...otp];
              for (let i = 0; i < newValue.length; i++) {
                updatedOtp[i] = newValue[i];
              }

              setOtp(updatedOtp);

              const nextEmptyIndex = updatedOtp.findIndex(
                (digit) => digit === ""
              );
              const nextIndex =
                nextEmptyIndex !== -1 ? nextEmptyIndex : otp.length - 1;

              if (inputRefs.current[nextIndex]) {
                inputRefs.current[nextIndex].focus();
              }
            }
          }
        }
      }
    };

    const timer = setTimeout(handleAutoFill, 100);
    return () => clearTimeout(timer);
  }, [otp, number]);

  // Handle input changes in each field
  const handleOtpChange = (e, index) => {
    let value = e.target.value;

    if (value.length > 1) {
      handleMultiDigitInput(value, index);
      return;
    }

    if (caseText === "upper") {
      value = value.toUpperCase();
    }
    let pattern = /^[0-9]*$/;
    if (!number) {
      pattern = /^[a-zA-Z0-9]*$/;
    }

    if (pattern.test(value) && value.length <= 1) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;

      setOtp(updatedOtp);

      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Process multi-digit input for paste/autofill
  const handleMultiDigitInput = (value, index) => {
    let pattern = number ? /^[0-9]*$/ : /^[a-zA-Z0-9]*$/;
    if (!pattern.test(value)) return;

    const formattedValue = caseText === "upper" ? value.toUpperCase() : value;

    const filledDigitsCount = otp
      .slice(0, index)
      .filter((d) => d !== "").length;
    let newValue = "";

    for (let i = 0; i < filledDigitsCount; i++) {
      newValue += otp[i];
    }

    newValue += formattedValue;
    newValue = newValue.substring(0, otp.length);

    const updatedOtp = [...otp];
    for (let i = 0; i < newValue.length; i++) {
      updatedOtp[i] = newValue[i];
    }

    setOtp(updatedOtp);

    const nextEmptyIndex = updatedOtp.findIndex((digit) => digit === "");
    const nextIndex = nextEmptyIndex !== -1 ? nextEmptyIndex : otp.length - 1;

    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };

  // Handle backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && isEmpty(otp[index])) {
      if (index > 0) {
        const updatedOtp = [...otp];
        updatedOtp[index - 1] = "";
        setOtp(updatedOtp);
        inputRefs.current[index - 1].focus();
      }
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  // Handle paste events
  const handlePaste = (e, index) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    let pattern = number ? /^[0-9]*$/ : /^[a-zA-Z0-9]*$/;
    if (!pattern.test(pastedData)) return;

    handleMultiDigitInput(pastedData, index);
  };

  // Focus when user clicks on input box
  const onfocusInput = (e) => {
    e.target?.children[0]?.focus();
  };

  return (
    <div className="otp-input flex">
      {otp.map((digit, index) => {
        return (
          <div
            className={`box ${focus === index ? "focus" : ""}`}
            key={index}
            onClick={onfocusInput}
          >
            <input
              type={type || "text"}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder={placeholder}
              disabled={isDisable}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onPaste={(e) => handlePaste(e, index)}
              maxLength="4"
              ref={(input) => (inputRefs.current[index] = input)}
              onFocus={() => setFocus(index)}
              onBlur={() => setFocus(null)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              autoComplete={index === 0 ? "one-time-code" : "off"}
              data-otp-index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OtpInput;
