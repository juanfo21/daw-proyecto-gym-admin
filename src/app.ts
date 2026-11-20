import express from 'express';
import cors from 'cors';
import authRouter from './rutas/auth.routes';
import { manejarErrores } from './utils/manejar-errores';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de Gym-Admin funcionando correctamente'
  });
});

app.use('/auth', authRouter);

app.use(manejarErrores);

export default app;