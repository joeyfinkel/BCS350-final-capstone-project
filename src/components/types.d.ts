import React from 'react';

type ButtonProps =
  | { button?: boolean; buttonText?: string; signOut?: never }
  | { button?: never; buttonText?: never; signOut?: boolean };
type PositionProps =
  | 'end'
  | 'center'
  | 'start'
  | 'between'
  | 'around'
  | 'evenly';

export type TitleProps = {
  title: string;
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type SidebarProps = ButtonProps &
  TitleProps & {
    contentPosition: PositionProps;
    loggedIn: boolean;
    children: React.ReactNode;
  };
