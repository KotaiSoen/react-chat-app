import { Route, Routes } from 'react-router-dom';
import './App.css';
import Messages from './COMPONENTS/messages/messages';
import NoMessages from './COMPONENTS/no-messages/no-messages';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <NoMessages /> }/>
      <Route path='/messages/:id' element={ <Messages /> }/>
    </Routes>
  );
}

export default App;
