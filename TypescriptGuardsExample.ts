/* Example 1: Our function uses union types, we narrow down using the different guards */

// 1. Easy Control flow
function logError(error: string | Error): string {
  if (typeof error == 'string') {
    return error;
  } else {
    return error.message;
  }
}

// 2. Use of more guards
function logErrorTwo(
  error: null | undefined | string | Error | Warning
): string {
  /* Equality operators ==> equality narrowing
    if (error === null || error === undefined) {
      return 'Unknown';
    }
 */

  // Best Practice - check falsy value than the equality operators
  if (!error) {
    return 'Unknown';
  }

  // typeof operator guard
  if (typeof error == 'string') {
    return error;
  }
  // in operator guard
  if ('text' in error) {
    return error.text;
  }
  // instanceof
  if (error instanceof Error) {
    return error.message;
  }
  // never
  throw new Error('Invalid value type');
}

interface Warning {
  text: string;
}

// 3. User-Defined Type Guards. Our function returns a type predicate in the form of: { parameter } is { Type }

const isString = (arg: unknown): arg is string => typeof arg === 'string';

const isError = (arg: unknown): arg is Error => arg instanceof Error;

const isWarning = (arg: unknown): arg is Warning => {
  // in operator guard works on objects only
  return typeof arg === 'object' && arg !== null && 'text' in arg;
};

type Falsy = false | 0 | -0 | 0n | '' | null | undefined;
const isFalsy = (arg: unknown): arg is Falsy => arg === false;
