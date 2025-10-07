import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbarcomponents";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";


export default function App() {
    return (
        <Router>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}