import React from 'react';
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import { UserProvider } from './shared/design/provider/UserProvider'
import './shared/design/css/App.css'

function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
