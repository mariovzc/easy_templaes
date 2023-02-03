import {
  Typography,
} from '@mui/material';
import EnabledModules from '../components/Main/EnabledModules';

function Home() {
  return (
    <>
      <Typography variant="h4">Modelos de cartas</Typography>
      <Typography variant="subtitle1">
        Genere sus templates de cartas o documentos de forma rapida.
      </Typography>
      <EnabledModules />
    </>
  );
}

export default Home;
