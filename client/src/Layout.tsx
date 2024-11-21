import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <main className="max-w-screen-xl mx-auto">
            <Header />
            <Outlet />
        </main>
    )
}

export default Layout
