import { useEffect, useRef, useState } from 'react';

enum Operation {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operation>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('');
    lastOperation.current = undefined;
  };

  const tootleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber(`-${number}`);
  };

  const removeLast = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      return setNumber('0');
    }
    const restNumber = number.slice(0, -1);
    if (restNumber.endsWith('.')) {
      return setNumber(restNumber.slice(0, -1));
    }
    setNumber(restNumber);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.DIVIDE;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.MULTIPLY;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.ADD;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const firstNumber = parseFloat(firstValue);
    const secondNumber = parseFloat(secondValue);
    if (isNaN(secondNumber)) {
      return firstNumber;
    }
    switch (operation) {
      case Operation.ADD:
        return firstNumber + secondNumber;
      case Operation.SUBTRACT:
        return firstNumber - secondNumber;
      case Operation.MULTIPLY:
        return firstNumber * secondNumber;
      case Operation.DIVIDE:
        return firstNumber / secondNumber;
      default:
        throw new Error(`Invalid ${operation} operation`);
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.SUBTRACT;
  };

  const buildNumber = (numberString: string) => {
    // Si el número ya tiene un punto y se intenta agregar otro, no hacer nada
    if (number.includes('.') && numberString === '.') {
      return;
    }
    // Si el número es 0 y se intenta agregar otro 0, no hacer nada
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Si el número es 0 y se intenta agregar un punto, permitirlo
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      // Si el número es 0 y se intenta agregar un número diferente de 0, reemplazarlo
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      // Si el número es 0 y se intenta agregar un número diferente de 0, reemplazarlo
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      // Si el número es -0 y se intenta agregar un número diferente de 0, reemplazarlo
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
    }
    setNumber(number + numberString);
  };

  return {
    formula,
    number,
    prevNumber,

    clean,
    tootleSign,
    removeLast,
    buildNumber,

    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateSubResult,
    calculateResult,
  };
};
