import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { RootProvider } from "./contexts/RootContext";
import AdminLayout from "./layouts/admin";
import ClientLayout from "./layouts/client";
import AdminHome from "./pages/admin/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ClientContact from "./pages/client/contact";
import ClientHealthAndActivity from "./pages/client/health-and-activity";
import ClientIntro from "./pages/client/home";
import ClientHomePage from "./pages/client/weather";
import ClientWeather from "./pages/client/weather-page";
import { LightTheme, darkTheme } from "./themes/theme";
import ClientHome from "./pages/client/weather";
import { ClientPredictWeather } from "./pages/client/predict-weather";
function App() {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const getCurrentTime = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour >= 6 && currentHour < 18) {
        setTheme(LightTheme);
      } else {
        setTheme(darkTheme);
      }
    };

    getCurrentTime();

    const interval = setInterval(() => {
      getCurrentTime();
    }, 60000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <RootProvider>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<>Chua co trang nay</>} />
              <Route path="/" element={<Navigate to='client/weather' />} />
              <Route path="/client" element={<ClientLayout />}>
                <Route index={true} path="intro" element={<ClientIntro />} />
                <Route path="contact" element={<ClientContact />} />
                <Route path="health" element={<ClientHealthAndActivity />} />
                <Route path="home" element={<ClientHome />} />
                <Route path="weather" element={<ClientWeather />} />
                <Route path="predict-weather" element={<ClientPredictWeather />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
              <Route index={true} element={<AdminHome />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          </ProSidebarProvider>
        </ThemeProvider>
      </RootProvider>
    </>
  );
}

export default App;
