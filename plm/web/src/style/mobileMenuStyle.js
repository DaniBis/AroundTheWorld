import styled from 'styled-components';

export const Sidebar = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    text-align: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({toggle}) => (toggle ? '100%' : '0')};
    top: ${({toggle}) => (toggle ? '0' : '-100%')}; 
`
