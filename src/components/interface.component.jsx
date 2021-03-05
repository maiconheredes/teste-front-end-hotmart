import React from 'react';
import PropTypes from 'prop-types';

import {
    TopBar,
    SideBar,
    ContentBar,
    ReimbursementBox,
    TimelineList
} from '.';

import {
    MainStyled
} from '../styles';
import { AddExpenseModal } from './modals.component';


export const Dashboard = ({ children }) => {
    Dashboard.propTypes = {
        children: PropTypes.any,
    };

    return <>
        <header>
            <TopBar children={'QuickOps'} />
        </header>
        <MainStyled>
            <SideBar />
            <ContentBar>
                <ReimbursementBox />
                <AddExpenseModal />
                <TimelineList />
            </ContentBar>
        </MainStyled>
        <footer></footer>
    </>
};
