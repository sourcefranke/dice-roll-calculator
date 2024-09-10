import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import NavigationLayout from './pages/NavigationLayout';
import DiceRoll from './pages/DiceRoll';
import About from './pages/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavigationLayout />,
        children : [
            { path: '/', element: <DiceRoll /> },
            { path: '/about', element: <About /> },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
