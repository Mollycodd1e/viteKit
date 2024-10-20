import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import AppRouter from "./Router.tsx";
function App() {
    return (_jsx(Router, { children: _jsx(Layout, { children: _jsx(AppRouter, {}) }) }));
}
export default App;
