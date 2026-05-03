import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
