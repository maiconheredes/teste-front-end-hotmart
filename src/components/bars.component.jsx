import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import {
    TopBarStyled,
    SideBarStyled,
    ContentBarStyled,
    BreadcrumbBarStyled,
    RightSidebarStyled,
    ContentWraperStyled,
} from '../styles';
import {
    SidebarList
} from '.';


export const TopBar = ({ children }) => {
    TopBar.propTypes = {
        children: PropTypes.any,
    };

    return <TopBarStyled>
        <Container fluid children={children} />
    </TopBarStyled>;
};

export const SideBar = () => {
    SideBar.propTypes = {

    };

    return <SideBarStyled>
        <FontAwesomeIcon icon={faAngleLeft} />
    </SideBarStyled>;
};

export const RightSideBar = () => {
    RightSideBar.propTypes = {

    };

    return <RightSidebarStyled>
        <Alert variant={'success'} className={'text-center'}>
            <span style={{color: 'gray'}}>{'Status'}</span>
            <h2>{'Concluído'}</h2>
        </Alert>
        <SidebarList />
    </RightSidebarStyled>
};

export const ContentBar = ({ children }) => {
    ContentBar.propTypes = {
        children: PropTypes.any,
    };

    return <>
        <BreadcrumbBarStyled>
            <div>Painel<span>/</span>Solicitação<span>/</span><strong>Solicitação</strong></div>
        </BreadcrumbBarStyled>
        <ContentWraperStyled>
            <ContentBarStyled children={children} />
            <RightSideBar />
        </ContentWraperStyled>
    </>;
};
