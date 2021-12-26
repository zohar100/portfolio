import { useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  },[]);

  return ( 
    <Layout>
        <Switch/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/' component={About}/>
        <Route exact path='/' component={Projects}/>
        <Route exact path='/' component={Contact}/>
    </Layout> 
   );
};

export default App;
