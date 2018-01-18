import Decimal from 'decimal.js';
import {ERROR_VALUE} from './../../error';

export const SYMBOL = '*';

export default function func(first, ...rest) {
  try {
    const result = rest.reduce((acc, value) => {
      return (new Decimal(acc)).mul(new Decimal(value)).toNumber();
    }, first);

    if (isNaN(result)) {
      throw Error(ERROR_VALUE);
    }

    return result;
  } catch (error) {
    throw Error(ERROR_VALUE);
  }
}

func.SYMBOL = SYMBOL;
