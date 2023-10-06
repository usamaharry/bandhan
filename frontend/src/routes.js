import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//local
import App from "./App";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import ContactScreen from "./pages/ContactScreen";
import AuthScreen from "./pages/AuthScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<HomeScreen />} />
      <Route index path="/contact" element={<ContactScreen />} />
      <Route index path="/auth" element={<AuthScreen />} />
    </Route>
  )
);

export default router;
