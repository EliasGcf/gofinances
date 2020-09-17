import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactions = await this.find();

    const income = transactions.reduce((incomeIncrement, transaction) => {
      if (transaction.type === 'income') {
        return incomeIncrement + transaction.value;
      }

      return incomeIncrement + 0;
    }, 0);

    const outcome = transactions.reduce((outcomeIncrement, transaction) => {
      if (transaction.type === 'outcome') {
        return outcomeIncrement + transaction.value;
      }

      return outcomeIncrement + 0;
    }, 0);

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }
}

export default TransactionsRepository;
