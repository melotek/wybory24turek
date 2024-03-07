import Link, { LinkProps } from "@/components/shared/linkCore.composed";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import List from "../shared/listCore.generic";
import staticContent from "@/public/staticContent.json";
import useToggle from "@/hooks/useToggle";
import { HTMLProps } from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, MenuList, Popper, ClickAwayListener, Grow, Paper, Divider, Box } from "@mui/material";
import useWindowWidth from "@/hooks/useWindowWidth";
import React from "react";
import theme from "@/ui/config/theme";
import PersonIcon from '@mui/icons-material/Person';
import replaceSpacesWithHyphens from "@/helpers/truncate";
type Props = {};

type MyLinkProps = {
  item: string;
} & Omit<LinkProps & HTMLProps<HTMLAnchorElement>, "href"> & { href?: string };

const items = staticContent.navigation;
const Navbar: React.FC<Props> = () => {
  const width = useWindowWidth(); // Use the custom hook
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  
  const ListElement = ({ item }: MyLinkProps) => {
    return (
      <>
    { item ==="Zaloguj" ?
    <>
    <Divider
    
    sx={{display: {xs: "block", md: "none"}}}
    ></Divider>
      <Link  color={theme.palette.text.primary} key={item} href={"/" + replaceSpacesWithHyphens(item)}
      
      sx={{
        py: {xs: theme.spacing(4), md: theme.spacing(0)},
        display: 'flex', // Use flex display to align items
        alignSelf: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        textDecoration: 'none'

      }}
      >
        
      
        <PersonIcon  sx={{ marginRight: theme.spacing(1)}}></PersonIcon>
        <Typography color={theme.palette.text.primary}  component="span" variant="h6">{item}</Typography>
      </Link><Divider sx={{display: {
        xs: "block",
        md: "none"
      
      }}}></Divider>
      </>
      : 
      <Link color={theme.palette.text.primary}  key={item} href={"/" + replaceSpacesWithHyphens(item)}
      
sx={{   textDecoration: 'none',}}
      >
        <Typography  variant="h6"       sx={{
        py: theme.spacing(4),
     

        display: 'flex', // Use flex display to align items
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        textDecoration: 'none'
      }}>
   {item}
        </Typography>
   
    </Link>
    }
      </>
    );
  };

  return (
    <AppBar component="nav" position="fixed" sx={{ padding: "20px 0px" }}>
      <Toolbar
      sx={{
        justifyContent: "space-between",
 
      }}
      >
        <Link color="inherit" href="/" sx={{ alignItems: "center", display:"flex" }}>
          <Image
            className="nav-logo-image relative"
            src="/images/logo.png"
            alt="logo miasta turku"
            width={69}
            height={69}
            style={{
              marginRight: theme.spacing(2),
            }}
            />
          <Typography component="h1" variant="h5" color="black">
            Wybory Turek
          </Typography>
        </Link>


  
        <MenuList component="ul"
                    sx={{ width: "100%", 
                    justifyContent: "space-evenly",
                  
                 display: {xs: "none", md: "flex"}
                  }}
                    onKeyDown={handleListKeyDown}
                    autoFocusItem={open}
                    id="navigation-menu"
                  >

                    <List
                      items={items}
                      renderItem={(item) => {
                        return <ListElement key={item} item={item} />;
                      }}
                    />
                  </MenuList>
       
        <IconButton
          ref={anchorRef}
          id="responsive-navigation-toggler"
          aria-controls={open ? "responsive-navigation-menu" : undefined}
          size="large"
          onClick={handleToggle}
          aria-haspopup="true"
          sx={{            display: {xs: "block", md: "none",},
        }}
          aria-expanded={open ? "true" : undefined}
        >
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-end"
          transition
          disablePortal
          sx={{
            width: "100%",
            display: {xs: "block", md: "none"},
            top: `${-theme.spacing(3)} !important`,
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-end' ? 'right top' : 'right bottom',
              }}
            >
              <Paper
              
              
              >
                <ClickAwayListener onClickAway={handleClose}>
                  
                  <MenuList component="ul"
                    aria-labelledby="responsive-navigation-toggler"
                    sx={{ width: "100%", padding: {xs: theme.spacing(4), md: theme.spacing(0)}}}
                    onKeyDown={handleListKeyDown}
                    autoFocusItem={open}
                    id="responsive-navigation-menu"
                  >
                      <Divider
                      ></Divider>
                    <List
                      items={items}
                      renderItem={(item) => {
                        return <ListElement key={item} item={item} />;
                      }}
                    />
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>

  );
};
export default Navbar;
