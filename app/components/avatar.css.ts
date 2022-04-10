import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
});

export const imageWrapper = style({
  width: vars.size[12],
  height: vars.size[12],
  position: 'relative',
  marginRight: vars.size[4],
});

export const image = style({
  borderRadius: '9999px',
  width: '100%',
  height: '100%',
});

export const name = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: 'bold',
});
