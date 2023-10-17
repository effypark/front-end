import React from 'react';
import 'twin.macro';
import NavigationItem from '../NavigationItem';
import { BottomNavigationProps } from './types';

const BottomNavigationItem = ({ selectedTab }: BottomNavigationProps) => (
  <div tw="w-full flex justify-center items-center gap-1">
    <NavigationItem tab="Home" active={selectedTab === 'Home'} />
    <NavigationItem tab="Search" active={selectedTab === 'Search'} />
    <NavigationItem tab="Post" active={selectedTab === 'Post'} />
    <NavigationItem tab="My" active={selectedTab === 'My'} />
  </div>
);

export default BottomNavigationItem;