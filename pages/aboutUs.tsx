import { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import { theme } from "../utils/theme";
import Link from "@mui/material/Link";
import Menu from "../components/Menu";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Container from "@mui/material/Container";

import { RootContext, _RootContextType } from "../contexts/context";

const AboutUs: NextPage = () => {
  const { lightMode } = useContext(RootContext) as _RootContextType;
  return (
    <ThemeProvider theme={theme}>
      <Menu currentPage="aboutUs" />
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
        <Grid container>
          <Grid xs={6}>
            <Box
              component="img"
              sx={{
                width: "100%",
                borderRadius: "20px",
              }}
              alt="The house from the offer."
              src="https://images.unsplash.com/photo-1537989036885-80b4d200958d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </Grid>
          <Grid
            xs={6}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              padding: "50px",
              gap: "20px",
            }}
          >
            <h1>درباره ما</h1>
            <h4>
              نکته مهمی که در بیشتر سایتهای ایرانی توجهی به آن نمیشود طراحی صفحه
              درباره ما یا همان About Us است. اکثر افراد در این بخش مطالبی
              طولانی و خسته کننده برای کاربر و یا نوشته ای کوتاه و ناقص قرار
              میدهند که میتواند اعتبار سایت یا شرکت شما را زیر سوال ببرد.
            </h4>
          </Grid>
        </Grid>
        <Grid
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ fontSize: "15px", width: "20%" }}
          >
            <Link
              href="/"
              underline="none"
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
              <ArrowCircleRightIcon />
              صفحه اصلی
            </Link>
          </Button>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AboutUs;
