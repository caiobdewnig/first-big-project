import MainHeader from './components/main-header.jsx';
import ImportantNew from './components/important-new.jsx';
import Aside from './components/aside.jsx';
import Footer from './components/footer.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <MainHeader />
      <ImportantNew />
      <Aside />
      <Footer />
      <footer>© 2023 News Homepage</footer>
    </div>
  );
}