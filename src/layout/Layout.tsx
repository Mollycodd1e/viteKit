import {Header} from "./components/Header/Header.tsx";

// ваш компонент меню

interface IMain {
    children?: React.ReactNode
}

const Layout = ({children}: IMain) => {
    return (
        <div>
            <Header/>
            <main>{children}</main>
        </div>
    )
}

export default Layout

