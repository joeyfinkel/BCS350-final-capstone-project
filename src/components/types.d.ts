import React from 'react';
import { UserProps } from './User';

type ButtonProps =
  | { button?: boolean; text?: ButtonTypes; signOut?: never }
  | { button?: never; text?: never; signOut?: boolean };
type PositionProps =
  | 'end'
  | 'center'
  | 'start'
  | 'between'
  | 'around'
  | 'evenly';

export type ButtonTypes = 'login' | 'register';

export type TitleProps = {
  title: string;
  titleSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type SidebarProps = ButtonProps &
  TitleProps & {
    contentPosition: PositionProps;
    children: React.ReactNode;
  };

export type UserFieldType = {
  value: keyof UserInfo;
  idx: number;
  duration: number;
  hint: string;
  onChange?: FormControlProps['onChange'];
};
