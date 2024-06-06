import { useCounterContext } from '../../Contexts/CounterContext';

export const Heading = () => {
  const [state] = useCounterContext();

  return <h1>Counter: {state.counter}</h1>;
};
