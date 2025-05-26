import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import SocialFeed from './pages/SocialFeed';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="contact" element={<Contact />} />
        <Route path="social" element={<SocialFeed />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;