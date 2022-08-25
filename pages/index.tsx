import { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { theme } from "../utils/theme";
import Menu from "../components/Menu";
import Link from "@mui/material/Link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { RootContext, _RootContextType } from "../contexts/context";

const Home: NextPage = () => {
  const { lightMode } = useContext(RootContext) as _RootContextType;

  return (
    <ThemeProvider theme={theme}>
      <Menu currentPage="" />
      <Container
        maxWidth="lg"
        sx={{
          direction: "rtl",
          backgroundColor: lightMode ? "#fff" : " #2B343B",
          color: lightMode ? "#2B343B" : " #fff",
          borderRadius: "20px",
          padding: "15px 250px 10px 250px !important ",
          marginTop: "10px",
        }}
      >
        <div style={{ position: "relative" }}>
          <Box
            component="img"
            sx={{
              width: "100%",
              borderRadius: "20px",
            }}
            alt="The house from the offer."
            src="https://media.istockphoto.com/photos/aurora-borealis-or-northern-lights-in-norway-picture-id615491800?k=20&m=615491800&s=612x612&w=0&h=rSc4EPuNnl8KKnFCQaT905sU_aoXG_5pgx27l3MTLXs="
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <h4> شَفَق قُطبی</h4>
          </div>
        </div>
        <Typography>
          شَفَق قُطبی یکی از پدیده‌های جوی کرهٔ زمین است. شفق قطبی پدیدهٔ ظهور
          نورهای رنگین و متحرک در آسمان شب است و معمولاً در عرض‌های نزدیک به دو
          قطب زمین بر اثر برخورد ذرات باردارِ بادِ خورشیدی و یونیزه شدن
          مولکول‌های موجود در یون‌سپهر (یونوسفر) زمین به وجود می‌آید.
        </Typography>
        <Grid
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "15px", width: "20%", marginTop: "20px" }}
          >
            <Link
              href="/aboutUs"
              underline="none"
              color=""
              sx={{
                fontSize: "15px",
                display: "flex",
                flexWrap: "wrap",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              درباره ما
              <ArrowCircleLeftIcon />
            </Link>
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
