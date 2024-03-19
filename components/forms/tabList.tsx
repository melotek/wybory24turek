// import { Tabs } from "@mui/lab"
import { Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";

type ITabList = {
  forms: string[];
  handleChange: (event: React.SyntheticEvent, newValue: string) => void;
  ariaLabel: string;
  selectedTab?: string;
};

const TabListComponent = ({
  forms,
  handleChange,
  ariaLabel,
  selectedTab,
}: ITabList) => {
  const theme = useTheme();
  const matches = useMediaQuery(
    `(max-width: ${theme.breakpoints.values.md}px)`,
  );

  function responsiveVariant() {
    if (matches) {
      return "scrollable";
    }
    return "fullWidth";
  }
  return (
    <>
      <Tabs
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        onChange={handleChange}
        aria-label={ariaLabel}
        value={selectedTab}
      >
        {forms.map((form: string) => (
          <Tab
            key={form}
            sx={{
              fontSize: ".82rem",
            }}
            label={form}
            value={form}
          />
        ))}
      </Tabs>
    </>
  );
};
export default TabListComponent;
