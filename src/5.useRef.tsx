import { useEffect, useRef } from "react";

interface AutoFocusTextFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export const AutoFocusTextField: React.FunctionComponent<AutoFocusTextFieldProps> =
  ({ value, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        ref={inputRef} />);
  }