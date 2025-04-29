import React, { useRef, useLayoutEffect, forwardRef } from "react";
import { scrollPage } from "../../../utils/functions";

const OtpInput = forwardRef(
  ({ value, setValue, digit, nextRef, autoFocus = false }, ref) => {
    const inputRef = useRef();

    useLayoutEffect(() => {
      if (autoFocus) {
        (ref?.current || inputRef.current)?.focus();
      }
    }, [autoFocus, ref]);

    const handleChange = (e) => {
      const val = e.target.value;

      if (val.length <= 1) {
        setValue((prev) => ({ ...prev, [digit]: val }));

        // Eğer bir sayı girildiyse sonraki inputa geç
        if (val.length === 1 && nextRef?.current) {
          nextRef.current.focus();
        }
      }
    };

    return (
      <div className="verify-input-container">
        <input
          ref={ref || inputRef} // ← dışarıdan ref gelirse onu kullan
          type="number"
          inputMode="numeric"
          autoFocus={autoFocus}
          onBlur={() => scrollPage({ top: 0 })}
          value={value}
          onChange={handleChange}
          maxLength={1}
        />
      </div>
    );
  }
);

export default OtpInput;
