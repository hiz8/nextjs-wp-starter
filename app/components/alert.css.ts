import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  borderBottomWidth: '1px',
  borderColor: vars.color.accent[7],
  backgroundColor: vars.color.accent[7],
  color: '#fff',
});

export const message = style({
  paddingTop: vars.size[2],
  paddingBottom: vars.size[2],
  textAlign: 'center',
  fontSize: vars.fontSizes.sm,
});
