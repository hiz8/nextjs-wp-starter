import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const root = style({
  backgroundColor: vars.color.accent[1],
  borderTopWidth: '1px',
  borderColor: vars.color.accent[2],
});

export const inner = style({
  paddingTop: '6rem',
  paddingBottom: '6rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: vars.color.accent[1],
  borderTopWidth: '1px',
  borderColor: vars.color.accent[2],
  '@media': {
    [mediaQueries.lg]: {
      flexDirection: 'row',
    },
  },
});

export const headline = style({
  fontSize: vars.fontSizes['4xl'],
  fontWeight: 'bold',
  letterSpacing: '-0.05em',
  lineHeight: 1.25,
  textAlign: 'center',
  marginBottom: vars.size[10],

  '@media': {
    [mediaQueries.lg]: {
      fontSize: vars.fontSizes['5xl'],
      textAlign: 'left',
      marginBottom: 0,
      paddingRight: vars.size[4],
      width: '50%',
    },
  },
});
