import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Presente } from '../entity/Presente';

const router = Router();
const repo = () => AppDataSource.getRepository(Presente);

// GET /presentes
router.get('/', async (_req, res) => {
  const presentes = await repo().find();
  res.json(presentes);
});

// PATCH /presentes/:id/reservar
router.patch('/:id/reservar', async (req, res) => {
  const { id } = req.params;
  const { nomeReservante } = req.body;

  const presente = await repo().findOneBy({ id: Number(id) });

  if (!presente) {
    return res.status(404).json({ error: 'Presente não encontrado' });
  }

  presente.reservado = true;
  presente.nomeReservante = nomeReservante;

  await repo().save(presente);

  const atualizados = await repo().find();
  res.json(atualizados);
});

export default router;
