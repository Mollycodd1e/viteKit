import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './layout/Layout.tsx'
import AppRouter from "./Router.tsx";

function App() {
    return (
        <Router>
            <Layout>
                <AppRouter/>
            </Layout>
        </Router>
    )
}

export default App
