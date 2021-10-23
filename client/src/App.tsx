import Layout from './hoc/Layout/Layout';
import { Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';

function App() {
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
