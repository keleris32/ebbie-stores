import styled from 'styled-components';

export const Nav = styled.nav`
  z-index: ${({ isSidebarOpen }) => (isSidebarOpen ? '2000' : 'auto')};
  position: ${({ isSidebarOpen }) => (isSidebarOpen ? 'absolute' : 'static')};
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '50%' : '0')};
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateX(-50%)' : 'translateX(0)'};
`;

export const NavBtn = styled.button`
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateX(-50%)' : 'translateX(0)'};
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '50%' : '0%')};
  position: ${({ isSidebarOpen }) => (isSidebarOpen ? 'absolute' : 'static')};
`;

export const NavLinkCon = styled.span`
  transform: ${({ isSidebarOpen }) =>
      isSidebarOpen ? 'translateX(50%)' : 'translateX(0)'}
    ${({ isSidebarOpen }) => (isSidebarOpen ? 'rotate(45deg)' : 'rotate(0)')};

  &:before {
    opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '1')};
  }

  &:after {
    transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? 'rotate(90deg)' : 'rotate(0)'}
      ${({ isSidebarOpen }) =>
        isSidebarOpen ? 'translateX(-6.7px)' : 'translateX(0)'};
  }

  @media screen and (max-width: 350px) {
    &:after {
      transform: ${({ isSidebarOpen }) =>
          isSidebarOpen ? 'rotate(90deg)' : 'rotate(0)'}
        ${({ isSidebarOpen }) =>
          isSidebarOpen ? 'translateX(-5px)' : 'translateX(0)'};
    }
  }
`;
