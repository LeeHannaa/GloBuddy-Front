import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoute from "./lib/PrivateRoute";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/GloBuddy" element={<Home />} />
          <Route path="/GloBuddy/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}