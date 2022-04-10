import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const root = style({
  width: '100%',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingRight: vars.size[5],
  paddingLeft: vars.size[5],

  '@media': {
    [mediaQueries.sm]: {
      maxWidth: vars.viewport.sm,
    },
    [mediaQueries.md]: {
      maxWidth: vars.viewport.md,
    },
    [mediaQueries.lg]: {
      maxWidth: vars.viewport.lg,
    },
    [mediaQueries.xl]: {
      maxWidth: vars.viewport.xl,
    },
    [mediaQueries.xl2]: {
      maxWidth: vars.viewport.xl2,
    },
  },
});
