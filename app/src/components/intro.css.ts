import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: vars.size[16],
  marginBottom: vars.size[16],
  '@media': {
    [mediaQueries.md]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: vars.size[12],
    },
  },
});

export const headline = style({
  marginBottom: vars.size[4],
  fontSize: vars.fontSizes['6xl'],
  fontWeight: 'bold',
  lineHeight: 1.25,
  letterSpacing: '-0.05em',

  '@media': {
    [mediaQueries.md]: {
      fontSize: vars.fontSizes['8xl'],
      paddingRight: vars.size[8],
    },
  },
});

export const subHeadline = style({
  textAlign: 'center',
  fontSize: vars.fontSizes.lg,

  '@media': {
    [mediaQueries.md]: {
      textAlign: 'left',
      paddingLeft: vars.size[8],
    },
  },
});

export const anchorLink = style({
  textDecoration: 'underline',
  transition: 'color .2s',
  ':hover': {
    color: vars.color.success,
    textDecoration: 'none',
  },
});
