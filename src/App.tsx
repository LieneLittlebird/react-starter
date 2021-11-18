/* eslint-disable react/no-unescaped-entities */
import './styles.scss';
import Counter from './Components/Counter';

const App = () => {
  return (
    <div>
      <h1>If hometask {process.env.name}</h1>
      <Counter />
    </div>
  );
};

export default App;
