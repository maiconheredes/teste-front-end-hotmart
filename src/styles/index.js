import styled from 'styled-components';


export const MainStyled = styled.main`
    background-color: #fafafa;
    width: 100vw;
    float: left;
`;

export const TopBarStyled = styled.section`
    background-color: #244E5A;
    padding: 1rem 0;
    color: white;
    width: 100%;
`;

export const SideBarStyled = styled.section`
    height: calc(100vh - 3rem);
    background-color: #0A3D4E;
    text-align: center;
    padding: 1rem;
    color: white;
    width: 3rem;
    float: left;

    @media (max-width: 991px) {
        text-align: initial;
        height: initial;
        width: 100%;
    }
`;

export const ContentBarStyled = styled.section`
    height: calc(100vh - 6rem);
    width: calc(100vw - 3rem);
    padding: 1rem;
    float: left;

    @media (max-width: 991px) {
        height: initial;
        width: 100%;
    }
`;

export const BreadcrumbBarStyled = styled.section`
    width: calc(100vw - 3rem);
    background-color: white;
    box-shadow: 0px 0px 3px;
    padding: 1rem;
    height: 3rem;
    float: left;

    span {
        font-weight: bolder;
        padding: 0 0.5rem;
        color: #0A3D4E;
    }

    @media (max-width: 991px) {
        height: initial;
        width: 100%;
    }
`;

export const ReimbursementBoxStyled = styled.div`
    background-image: linear-gradient(to right, #00d7ce, #00c5fc);
    border-radius: 0.25rem;
    padding: 1rem;
`;