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

export const ContentWraperStyled = styled.section`
    height: calc(100vh - 6rem);
    width: calc(100vw - 3rem);
    overflow-y: scroll;
    float: left;

    @media (max-width: 991px) {
        height: initial;
        width: 100%;
    }
`;

export const ContentBarStyled = styled.section`
    width: 75%;
    padding: 1rem;
    float: left;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const RightSidebarStyled = styled.section`
    box-shadow: 0px 0px 3px;
    background-color: white;
    border-bottom-left-radius: 0.25rem;
    width: 25%;
    padding: 1rem;
    float: left;

    @media (max-width: 991px) {
        border-radius: 0;
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
    margin-bottom: 1rem;
    padding: 2rem;
    color: white;
`;

export const TimelineBoxStyled = styled.div`
    box-shadow: 0px 0px 5px lightgrey;
    background-color: white;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 2rem;
`;

export const SidebarBoxStyled = styled.div`
    box-shadow: 0px 0px 5px lightgrey;
    background-color: white;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding: 1rem;
`;

export const TimelineIconStyled = styled.span`
    background-color: #f0f3f7;
    vertical-align: middle;
    color: lightsteelblue;
    display: inline-block;
    margin-bottom: 1rem;
    border-radius: 100%;
    text-align: center;
    font-size: 1.3rem;
    padding-top: 1rem;
    height: 50px;
    width: 50px;
`;

export const TimelineSubtitleStyled = styled.p`
    color: lightgrey;
`;

export const SidebarHighlightStyled = styled.p`
    color: darkblue;
    font-weight: bolder;
`;

export const TimelineNotesStyled = styled.p`
    color: gray;
    font-size: 0.8rem;
`;
