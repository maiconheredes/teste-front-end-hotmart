import React from 'react';
import PropTypes from 'prop-types';

import {
    TopBar,
    SideBar,
    ContentBar,
    ReimbursementBox
} from '.';

import {
    MainStyled
} from '../styles';


export const Dashboard = () => {
    Dashboard.propTypes = {

    };

    return <>
        <header>
            <TopBar children={'QuickOps'} />
        </header>
        <MainStyled>
            <SideBar />
            <ContentBar>
                <ReimbursementBox/>
            </ContentBar>
        </MainStyled>
        <footer></footer>
    </>
};
