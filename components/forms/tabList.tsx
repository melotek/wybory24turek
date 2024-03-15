import { TabList } from "@mui/lab"
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material"

type ITabList = {
    forms: string[]
    handleChange: (event: React.SyntheticEvent, newValue: string) => void,
    ariaLabel: string,
} 

const TabListComponent = ({forms, handleChange, ariaLabel, }: ITabList) => {
const theme = useTheme()
const matches = useMediaQuery(`(max-width: ${theme.breakpoints.values.md}px)`)

function responsiveVariant () {
    if (matches) {
        return "scrollable"
}
    return "fullWidth"
    
    }
    return (
<>
<TabList  
variant={responsiveVariant() as "scrollable" | "fullWidth" }

onChange={handleChange} aria-label={ariaLabel}>
            {forms.map((form: string) => (
              <Tab
              key={form}
              sx={{
                fontSize: ".82rem",
          
              
              }}  label={form} value={form} />
            ))}
          </TabList>
        </>
    )
}
export default TabListComponent
