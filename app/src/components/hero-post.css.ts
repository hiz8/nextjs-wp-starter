import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const coverImage = style({
  marginBottom: vars.size[8],
  '@media': {
    [mediaQueries.md]: {
      marginBottom: vars.size[16],
    },
  },
});

export const postInfo = style({
  marginBottom: vars.size[20],
  '@media': {
    [mediaQueries.md]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      columnGap: vars.size[16],
      marginBottom: vars.size[28],
    },
    [mediaQueries.lg]: {
      columnGap: vars.size[8],
    },
  },
});

export const headline = style({
  marginBottom: vars.size[4],
  fontSize: vars.fontSizes['4xl'],
  lineHeight: 1.25,
  '@media': {
    [mediaQueries.lg]: {
      fontSize: vars.fontSizes['6xl'],
    },
  },
});

export const anchorLink = style({
  textDecoration: 'none',
});

export const date = style({
  marginBottom: vars.size[4],
  fontSize: vars.fontSizes.lg,
  '@media': {
    [mediaQueries.md]: {
      marginBottom: 0,
    },
  },
});

export const excerpt = style({
  fontSize: vars.fontSizes.lg,
  lineHeight: 1.625,
  marginBottom: vars.size[4],
});
