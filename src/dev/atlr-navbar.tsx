import React from 'react';
import css from './css.module.css';
interface AtlrProps {
    children: React.ReactNode;
}





export const AtlrNavbar = ({ children }: AtlrProps) => {
  return (
    <>
<NavPlacement className={css.nav__placement}><Bar></Bar></NavPlacement>
    </>
  );
};