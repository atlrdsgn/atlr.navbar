import * as React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import {styled} from 'styled-components'

const styledNavRoot = styled(NavigationMenu.Root)`
  --radix-navigation-menu-item-padding: 0;

  z-index: 998;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  transform: translateY(0px) translateX(-50%);
  box-sizing: border-box;
  display: block;
  -webkit-font-smoothing: antialiased;
  width: calc(100% - 2rem);
  height: 3.5rem;

  margin: auto;
  padding: 0;
`

const styledNavBar = styled(NavigationMenu.List)`
  --radix-navigation-menu-item-padding: 0;

  position: fixed;
  top: 4;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  padding: 4;
  list-style: none;
  box-shadow: none;
  margin: auto;

  border-radius: 16px !important;
  background-color: transparent;
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  line-height: 23px;
  height: 48px;
  border: 1px solid #c6d1d9;
`

const styledNavContent = styled(NavigationMenu.Content)`
  --radix-navigation-menu-item-padding: 0;

  display: flex;
  width: 100%;
  margin: auto;
  padding: 0;
  color: #000;
  transition: color 0.4s ease;

  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
`

export const NavRoot = styledNavRoot
export const NavBar = styledNavBar
export const NavContent = styledNavContent
