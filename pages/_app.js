import { Container } from '@mui/system';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import NavBarOptions from '../components/NavBarOptions';

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => {
    setOpen(open);
  };
  return (
    <>
      <Container >
      <NavBar toggleDrawer={toggleDrawer} />
        <Component {...pageProps} />
      </Container>
      <NavBarOptions open={open} toggleDrawer={toggleDrawer} />
    </>
  );
}
export default MyApp;
