import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, {SelectProps} from "@mui/material/Select";


type SelectOptionProps = {
   selectOptions: { value: string | number; label: string }[];
    myLabel: string;


} &  Omit<SelectProps, "name">
const SelectOptions = ({selectOptions, myLabel, ...rest}: SelectOptionProps) => {


    return (


        <FormControl fullWidth >
            <InputLabel id={myLabel + "-label"} >{myLabel}</InputLabel>

        <Select 
label={myLabel}
MenuProps={{
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    anchorEl: null, // This is important to prevent Material-UI from overriding the anchorOrigin
  }}
        {...rest}
        >
            {selectOptions.map(({value, label}) => (
                <MenuItem key={label} value={value} >
                    {label}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
    );
};
export default SelectOptions;