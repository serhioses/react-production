import { Box, Button, Text } from '@chakra-ui/react';

import { selectCounterValue } from 'entities/Counter/model/selectors/select-counter-value/select-counter-value';
import { counterActions } from 'entities/Counter/model/slice/counter-slice';

import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider/config/hooks';

export function Counter() {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector(selectCounterValue);

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  function setValue() {
    const n = Number(prompt('Number', '0'));

    if (n) {
      dispatch(counterActions.setValue(n));
    }
  }

  return (
    <Box>
      <Text data-testid="counter-value">{counterValue}</Text>
      <Button onClick={increment} data-testid="counter-inc">
        Increment
      </Button>
      <Button onClick={decrement} data-testid="counter-dec">
        Decrement
      </Button>
      <Button onClick={setValue} data-testid="counter-setValue">
        Set value
      </Button>
    </Box>
  );
}
