import { TextField } from "@material-ui/core";
import React, { useState } from "react";

interface Props {
    onChange: (value: number) => void;
    label?: string;
    error?: boolean;
    helperText?: string | false;
}

const PriceInput = ({ onChange, label, error, helperText }: Props) => {
    let [stringValue, setStringValue] = useState<string>("");
    const [previewValue, setPreviewValue] = useState<string>("0.00 Rs");

    const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const key = e.key;
        if (/[0-9]/.test(key) || key === "Backspace") {
            let newStringValue;

            if (key === "Backspace") {
                newStringValue = stringValue.slice(0, -1);
            } else {
                newStringValue = `${stringValue}${key}`;
            }

            setStringValue(newStringValue);

            const newFloatValue = newStringValue === "" ? 0 : parseInt(newStringValue) / 100;

            const currencyValue = newFloatValue.toLocaleString("en-US", {
                style: "currency",
                currency: "LKR",
            });

            const newPreviewValue = `${currencyValue.substr(3)} Rs`; // remove lKR and add Rs
            setPreviewValue(newPreviewValue);
            onChange(newFloatValue); // parse float value to formik form
        }
    };

    return (
        <TextField
            label={label}
            variant="outlined"
            size="small"
            value={previewValue}
            type="text"
            inputProps={{ style: { textAlign: "end" } }}
            onKeyDown={handleOnKeyDown}
            error={error}
            helperText={helperText}
        />
    );
};

export default PriceInput;
