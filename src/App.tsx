import { NavLink, Outlet } from 'react-router-dom';
import { S } from './components/pages/_styles';
import styles from "./components/Site.module.css";


const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PAGE5: '/protectedPage',
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Prices</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={"/protected"}>ProtectedPage</NavLink></S.NavWrapper>

                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                    <a href="/adidas">Перейти на главную страницу</a>
                    </div>
                    <Outlet/>
       {/*              <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>

             
                        <Route path={'/:model/:id'} element={<Model/>}/>

                        <Route path={'/*'} element={<Error404/>}/>

                    </Routes> */}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



