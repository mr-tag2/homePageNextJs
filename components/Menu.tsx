import { ChangeEvent, FC, useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from '@mui/icons-material/ModeNight';import PersonIcon from "@mui/icons-material/Person";
import { RootContext, _RootContextType } from "../contexts/context";

const Menu: FC<{ currentPage: string }> = ({ currentPage }) => {
  const { lightMode, setLightMode } = useContext(
    RootContext
  ) as _RootContextType;

  const handleChangedLightMode = (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setLightMode(checked);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        direction: "rtl",
        backgroundColor: lightMode ? "#fff" : " #2B343B",
        color: lightMode ? "#2B343B" : " #fff",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <Grid container>
        <Grid
          xs={7}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link
            href="/"
            color={currentPage == "" ? "blue" : "inherit"}
            underline="none"
            sx={{ fontSize: "15px" }}
          >
            صفحه نخست
          </Link>{" "}
          <Link
            href="/aboutUs"
            color={currentPage == "aboutUs" ? "blue" : "inherit"}
            underline="none"
            sx={{ fontSize: "15px" }}
          >
            درباره ما
          </Link>
        </Grid>
        <Grid xs={2}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ justifyContent: "flex-end" }}
          >
            <Typography>
              <WbSunnyIcon
                fontSize="small"
                color={!lightMode ? undefined : "warning"}
              />{" "}
            </Typography>
            <Switch
              checked={lightMode}
              onChange={handleChangedLightMode}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>
              <ModeNightIcon
                fontSize="small"
                color={lightMode ? undefined : "warning"}
              />
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={3}>
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "15px", width: "49%", marginLeft: "2%" }}
          >
            <PersonIcon />
            ثبت نام
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "15px", width: "49%" }}
          >
            ورود
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
