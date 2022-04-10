import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const coverImage = style({
  marginBottom: vars.size[5],
});

export const headline = style({
  marginBottom: vars.size[3],
  fontSize: vars.fontSizes['3xl'],
  lineHeight: 1.25,
});

export const anchorLink = style({
  textDecoration: 'none',
});

export const date = style({
  marginBottom: vars.size[4],
  fontSize: vars.fontSizes.lg,
});

export const excerpt = style({
  fontSize: vars.fontSizes.lg,
  lineHeight: 1.625,
  marginBottom: vars.size[4],
});
