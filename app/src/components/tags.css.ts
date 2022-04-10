import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  maxWidth: vars.width['2xl'],
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const tagHolder = style({
  marginTop: vars.size[8],
  fontSize: vars.fontSizes.lg,
  fontWeight: 'bold',
});

export const tag = style({
  marginLeft: vars.size[4],
  fontWeight: 'normal',
});
