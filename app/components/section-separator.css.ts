import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  borderColor: vars.color.accent[2],
  marginTop: vars.size[28],
  marginBottom: vars.size[24],
});
