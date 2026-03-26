import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();
  
  // Determine nav theme based on current route
  const navTheme = location.pathname === '/about' ? 'nav-about' : 'nav-home';

  return (
    <>
      <Navigation theme={navTheme} />
      <Outlet />
      <Footer />
    </>
  );
}
