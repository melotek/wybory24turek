import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectProps } from "@mui/material/Select";
import { forwardRef } from "react";

type Ref = HTMLSelectElement;
type SelectOptionProps = {
  selectOptions: { value: string | number; label: string }[];
  myLabel: string;
} & Omit<SelectProps, "name">;
const SelectOptions = forwardRef<Ref, SelectOptionProps>(
  ({ selectOptions, myLabel, ...rest }, ref) => {
    return (
      <FormControl fullWidth key={myLabel}>
        <InputLabel id={myLabel + "-label"}>{myLabel}</InputLabel>

        <Select
          ref={ref}
          label={myLabel}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            transformOrigin: {
              vertical: "bottom",
              horizontal: "center",
            },
            anchorEl: null, // This is important to prevent Material-UI from overriding the anchorOrigin
          }}
          {...rest}
        >
          {selectOptions.map(({ value, label }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);
export default SelectOptions;
