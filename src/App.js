import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import RecipeNavbar from './components/Navbar';
import RecipeList from './components/List';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <RecipeNavbar/>
      <RecipeList/>
      <Footer />
    </div>
  );
}

export default App;
