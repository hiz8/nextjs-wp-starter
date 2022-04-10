import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const root = style({
  fontSize: vars.fontSizes['2xl'],
  fontWeight: 'bold',
  lineHeight: 1.25,
  letterSpacing: '-0.025em',
  marginTop: vars.size[8],
  marginBottom: vars.size[20],
  '@media': {
    [mediaQueries.md]: {
      fontSize: vars.fontSizes['4xl'],
      letterSpacing: '-0.05em',
    },
  },
});

export const anchorLink = style({
  ':hover': {
    textDecoration: 'none',
  },
});
