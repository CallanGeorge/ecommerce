import { Container } from 'react-bootstrap'

import Header from './components/header'
import Footer from './components/footer'

import HomeScreen from './screens/homescreen'

function App() {
  return (
    <div>
      <Header />
        <main className='py-3'>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      <Footer />
    
    </div>
  );
}

export default App;
