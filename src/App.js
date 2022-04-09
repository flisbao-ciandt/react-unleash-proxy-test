import logo from './logo.svg';
import './App.css';
import { useFlag } from '@unleash/proxy-client-react'
function App() {
  const enabled = useFlag('test.proxy.2')
  return (
    <div className="App">
      <header className="App-header">
        {enabled ? 'POSSUI TOGGLE' : 'NÃO POSSUI TOGGLE' }
       
      </header>
    </div>
  );
}

export default App;
