import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/create-account" element={<CreateAccount/>} />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
