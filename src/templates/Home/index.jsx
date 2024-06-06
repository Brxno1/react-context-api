import './style.css';

import { useCounterContext } from '../../Contexts/CounterContext';

import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

export function Home() {
  const [state, actions] = useCounterContext();

  const handleError = async () => {
    await actions
      .asyncError()
      .then((resolve) => console.log(resolve))
      .catch((err) => console.log(err.name, ':', err.message));
  };

  return (
    <div>
      <Heading />
      <div className="container">
        <Button onButtonClicked={actions.increase}>Increase</Button>
        <Button onButtonClicked={actions.decrease}>Decrease</Button>
        <Button onButtonClicked={actions.reset}>Reset</Button>
        <Button onButtonClicked={() => actions.setCounter({ counter: 10 })}>
          Set Counter
        </Button>
        <Button
          disabled={state.loading}
          onButtonClicked={actions.asyncIncrease}
        >
          Increase Start
        </Button>
        <Button disabled={state.loading} onButtonClicked={handleError}>
          async Error!
        </Button>
      </div>
    </div>
  );
}
