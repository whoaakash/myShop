import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import './categories.style.scss';
import './components/directory/directory.style.scss';

const App = () => {

  const Shop = () => {
    return (<div>
      <h1>This is shop page</h1>
    </div>
    );
  };
  return (
    <Routes>
      <Route path='/' element= {<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route >
    </Routes >
  ); 
};

export default App;
