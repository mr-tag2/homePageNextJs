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
          padding: "30px 200px !important ",
          marginTop: "10px",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            borderRadius: "20px",
          }}
          alt="The house from the offer."
          src="https://i.picsum.photos/id/1022/6000/3376.jpg?hmac=FBA9Qbec8NfDlxj8xLhV9k3DQEKEc-3zxkQM-hmfcy0"
        />
        <Typography>
          شفق‌های قطبی نورهای زیبایی‌اند که به‌طور طبیعی در آسمان دیده می‌شوند و
          معمولاً در شب و در عرض‌های جغرافیایی قطبی به چشم می‌خورند. آن‌ها در
          یونوسفر تشکیل می‌شوند و در سپیده‌دم قطبی رویت پذیرند. در عرض جغرافیایی
          قطب شمال به آن‌ها شفق‌های شمالی نیز گفته می‌شود که در سال ۱۶۲۱ توسط
          پیر گاسندی روی این پدیده طبیعی نهاده شد. به شفق‌های قطبی، نور قطب شمال
          هم گفته می‌شود زیرا آن‌ها غالباً در نیم کرهٔ شمالی دیده می‌شوند و
          هرقدر به قطب شمال نزدیک می‌شوید با توجه به مجاورت با قطب مغناطیسی
          شمالی زمین احتمال بیشتری می‌رود که بتوانید آن‌ها را ببینید. برای
          نمونه، در شمال شبه جزیره اسکاندیناوی، ایسلند، گرینلند و همین طور در
          آلاسکا و شهرهای شمالی کانادا و روسیه امکان رویت آن‌ها بسیار زیاد است.
        </Typography>
        <Grid
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ fontSize: "15px", width: "20%" }}
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
