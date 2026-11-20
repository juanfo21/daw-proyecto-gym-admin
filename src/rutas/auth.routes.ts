import { Router } from 'express';
import { registrar, iniciarSesion } from '../controladores/auth.controller';

const router = Router();

router.post('/registrar', registrar);
router.post('/iniciar-sesion', iniciarSesion);

export default router;
