import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './components/Navbar.css'

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route path="/" exact />
                    </Switch>
                    <Hero />
                </div>
            </Router>
        </>
    )
}

export default App
