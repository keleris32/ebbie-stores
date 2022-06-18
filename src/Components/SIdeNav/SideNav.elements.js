import styled from 'styled-components';

export const SideNavCon = styled.aside`
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateY(0)' : 'translateY(-100%)'};
`;

export const SideUl = styled.ul`
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '1' : '0')};
`;
