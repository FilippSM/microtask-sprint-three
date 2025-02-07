import React from 'react';
import styles from "./components/Site.module.css";

import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import styled from 'styled-components';
import { S } from './components/pages/_styles';
import { Adidas } from './components/pages/Adidas';
import { Puma } from './components/pages/Puma';
import { Abibas } from './components/pages/Abibas';
import { Model } from './components/pages/Model';

const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGERROR: '/error404',
}


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE1}
                        >
                            ADIDAS
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE2}
                        >
                            PUMA
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE3}
                        >
                            ABIBAS
                        </NavLink>
                    </S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/adidas" />} />
                        <Route path="/adidas" element={<Adidas />} />
                        <Route path="/puma" element={<Puma />} />
                        <Route path="/bibas" element={<Abibas />} />
                        {/* <Route path="/ADIDAS/:id" element={<Model />} /> */}
                        <Route path="/:model/:id" element={<Model />} />


                        <Route path={PATH.PAGERROR} element={<Error404 />} />
                        <Route path="*" element={<Error404 />} />
                     {/*    <Route path="/ADIDAS/*" element={<Error404 />} /> */}

                      {/*   <Route path="/error404" element={<Error404 />} />
                        <Route path="/*" element={<Navigate to={PATH.PAGERROR} />} /> */}
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}





export default App;