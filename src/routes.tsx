import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}