import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Links from './Links'
import Error from './404'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/links' element={<Links/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
