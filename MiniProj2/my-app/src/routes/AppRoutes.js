import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import Collection from '../pages/Collection';
import Login from '../pages/Login';

export const AppRoutes = (props) => {

    return (

        <Routes>
            <Route exact path='/' element={<Home {...props} />} >
            </Route>
            <Route path='/collection' element={<Collection {...props} />} />
            <Route path='/dashboard' element={<Dashboard {...props} />}>
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}