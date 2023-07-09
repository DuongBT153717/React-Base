import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootProvider } from "./contexts/RootContext";
import AdminHome from "./pages/admin/home";
import ClientLayout from "./layouts/client";
import ClientContact from "./pages/client/contact";
import ClientIntro from "./pages/client/home";
import ClientHome from "./pages/client/weather";

function App() {
  return (
    <>
      <RootProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<>Chua co trang nay</>} />
            <Route path="/client" element={<ClientLayout />}>
              <Route index={true} path="intro" element={<ClientIntro />} />
              <Route path="contact" element={<ClientContact />} />
              <Route path="weather" element={<ClientHome />} />
            </Route>
            <Route path="admin" element={<AdminHome />} />
          </Routes>
        </BrowserRouter>
      </RootProvider>
    </>
  );
}

export default App;
