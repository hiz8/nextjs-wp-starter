import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  paddingLeft: vars.size[1],
});

export const category = style({
  paddingLeft: vars.size[1],
});
