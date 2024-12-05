import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
    const location  = useLocation()
    const hiddenHeader = ['/login', '/register']
    return (
        <main className="max-w-screen-xl mx-auto">
            {!hiddenHeader.includes(location.pathname) && <Header />}
            <Outlet />
        </main>
    )
}

export default Layout
