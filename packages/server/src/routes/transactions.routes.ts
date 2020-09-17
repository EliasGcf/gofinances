import { getCustomRepository } from 'typeorm';
import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();
const upload = multer(uploadConfig);

transactionsRouter.get('/', async (req, res) => {
  const transactionsRepository = getCustomRepository(TransactionsRepository);
  const transactions = await transactionsRepository.find();
  const balance = await transactionsRepository.getBalance();

  return res.json({ transactions, balance });
});

transactionsRouter.post('/', async (req, res) => {
  const { title, value, type, category } = req.body;

  const createTransaction = new CreateTransactionService();

  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category,
  });

  return res.json(transaction);
});

transactionsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteTransaction = new DeleteTransactionService();

  await deleteTransaction.execute({ id });

  return res.status(204).send();
});

transactionsRouter.post('/import', upload.single('file'), async (req, res) => {
  const importTransaction = new ImportTransactionsService();

  const transactions = await importTransaction.execute({
    filePath: req.file.path,
  });

  return res.json(transactions);
});

export default transactionsRouter;
