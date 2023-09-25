import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Edit from './Edit';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/Create'
                    element={<Create />}
                />
                <Route
                    path='/Home'
                    element={<Home />}
                />
                <Route
                    path='/Read/:ID'
                    element={<Read />}
                />
                <Route
                    path='/Edit/:ID'
                    element={<Edit />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
