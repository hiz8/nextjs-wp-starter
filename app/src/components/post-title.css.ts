import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const headline = style({
  fontSize: vars.fontSizes['6xl'],
  fontWeight: 'bold',
  lineHeight: 1.25,
  letterSpacing: '-0.05em',
  marginBottom: vars.size[12],
  textAlign: 'center',

  '@media': {
    [mediaQueries.md]: {
      lineHeight: 1,
      textAlign: 'left',
    },
  },
});
