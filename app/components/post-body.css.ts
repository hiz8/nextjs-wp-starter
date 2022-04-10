import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

export const root = style({
  maxWidth: vars.width['2xl'],
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const content = style({
  fontSize: vars.fontSizes.lg,
  lineHeight: 1.625,
});

globalStyle(`${root} :is(p, ul, ol, blockquote)`, {
  marginTop: vars.size[6],
  marginBottom: vars.size[6],
});

globalStyle(`${root} a`, {
  textDecoration: 'underline',
});

globalStyle(`${root} :is(ul, ol)`, {
  paddingLeft: vars.size[4],
});

globalStyle(`${root} ul`, {
  listStyleType: 'disc',
});

globalStyle(`${root} ol`, {
  listStyleType: 'decimal',
});

globalStyle(`${root} ul > li > ul, ${root} ol > li > ol`, {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: vars.size[4],
});

globalStyle(`${root} ul > li > ul`, {
  listStyle: 'circle',
});

globalStyle(`${root} h2`, {
  fontSize: vars.fontSizes['3xl'],
  marginTop: vars.size[12],
  marginBottom: vars.size[4],
  lineHeight: 1.375,
});

globalStyle(`${root} h3`, {
  fontSize: vars.fontSizes['2xl'],
  marginTop: vars.size[8],
  marginBottom: vars.size[4],
  lineHeight: 1.375,
});

globalStyle(`${root} h4`, {
  fontSize: vars.fontSizes['xl'],
  marginTop: vars.size[6],
  marginBottom: vars.size[4],
  lineHeight: 1.375,
});

globalStyle(`${root} pre`, {
  whiteSpace: 'pre',
  overflowX: 'auto',
  padding: vars.size[4],
  fontSize: vars.fontSizes.sm,
  lineHeight: 1.25,
  borderWidth: '1px',
  borderColor: vars.color.gray[400],
  backgroundColor: vars.color.gray[100],
});

globalStyle(`${root} code`, {
  fontSize: vars.fontSizes.sm,
});

globalStyle(`${root} figcaption`, {
  textAlign: 'center',
  fontSize: vars.fontSizes.sm,
});

globalStyle(`${root} blockquote`, {
  borderLeft: `4px solid ${vars.color.gray[500]}`,
  backgroundColor: vars.color.gray[200],
  fontStyle: 'italic',
  marginLeft: 0,
  paddingTop: vars.size[4],
  paddingBottom: vars.size[4],
  paddingRight: vars.size[6],
  paddingLeft: vars.size[6],
});

globalStyle(`${root} blockquote p`, {
  paddingTop: 0,
});

globalStyle(`${root} blockquote cite`, {
  fontStyle: 'normal',
});

globalStyle(`${root} audio`, {
  width: '100%',
});
