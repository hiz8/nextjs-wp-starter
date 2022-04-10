import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const avatarPC = style({
  display: 'none',
  '@media': {
    [mediaQueries.md]: {
      display: 'block',
      marginBottom: vars.size[12],
    },
  },
});

export const avatarMobile = style({
  display: 'block',
  marginBottom: vars.size[6],
  '@media': {
    [mediaQueries.md]: {
      display: 'none',
    },
  },
});

export const coverImage = style({
  marginBottom: vars.size[8],
  '@media': {
    [mediaQueries.md]: {
      marginBottom: vars.size[16],
      marginRight: 0,
      marginLeft: 0,
    },
  },
});

export const postMeta = style({
  maxWidth: vars.width['2xl'],

  '@media': {
    [mediaQueries.md]: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  },
});

export const postMetaInner = style({
  marginBottom: vars.size[6],

  '@media': {
    [mediaQueries.md]: {
      fontSize: vars.fontSizes.lg,
    },
  },
});
