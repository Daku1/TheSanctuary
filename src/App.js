import './App.css'
import Navbar from './components/Navbar'
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
                </div>
            </Router>
        </>
    )
}

export default App
