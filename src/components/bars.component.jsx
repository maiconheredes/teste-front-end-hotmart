import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { 
    TopBarStyled, 
    SideBarStyled, 
    ContentBarStyled,
    BreadcrumbBarStyled
} from '../styles';


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

export const ContentBar = ({ children }) => {
    ContentBar.propTypes = {
        children: PropTypes.any,
    };

    return <>
        <BreadcrumbBarStyled>
            <div>Painel<span>/</span>Solicitação<span>/</span><strong>Solicitação</strong></div>
        </BreadcrumbBarStyled>
        <ContentBarStyled children={children} />
    </>;
};
