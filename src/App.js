import ProNav from './ProNav.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Footer.js';
import Main from './Main.js';


function App() {
  return (
    <div className="bg-red">
      <ProNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
