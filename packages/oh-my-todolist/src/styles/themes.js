import theme from "styled-theming";
import { color } from './variables';

export const font = theme("font", {
    sansSerif: '"Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", sans-serif',
    serif: 'Georgia, Times, "Times New Roman", serif',
    monoSpaced: 'Consolas, monaco, monospace',
});

export const backgroundColor = theme("mode", {
    light: color.white,
    dark: color.black,
    todoist: color.todoist,
    noir: color.noir,
    neutral: color.neutral,
    tangerine: color.tangerine,
});

export const borderColor = theme("mode", {
    light: color.white,
    dark: color.black,
    todoist: color.todoist500,
    noir: color.noir500,
    neutral: color.neutral500,
    tangerine: color.tangerine500,
});

export const foreColor = theme("mode", {
    light: color.black,
    dark: color.white,
    todoist: color.white,
    noir: color.white,
    neutral: color.black,
    tangerine: color.white
});

export const grayScaleColor = theme("mode", "grayScale", {
    grayForTitle: {
        light: color.black,
        dark: color.white,
        todoist: color.black,
        noir: color.black,
        neutral: color.black,
        tangerine: color.black,
    },
    grayForSubTitle: {
        light: color.gray600,
        dark: color.gray400,
        todoist: color.gray600,
        noir: color.gray600,
        neutral: color.gray600,
        tangerine: color.gray600,
    },
    grayForText: {
        light: color.gray900,
        dark: color.gray100,
        todoist: color.gray900,
        noir: color.gray900,
        neutral: color.gray900,
        tangerine: color.gray900,
    },
    grayForMark: {
        light: color.gray500,
        dark: color.gray500,
        todoist: color.gray500,
        noir: color.gray500,
        neutral: color.gray500,
        tangerine: color.gray500,
    },
});

export const statusBackgroundColor = theme.variants("mode", "status", {
  success: { 
    light: color.green,
    dark: color.green,
    todoist: color.green,
    noir: color.green,
    neutral: color.green,
    tangerine: color.green,
  },
  danger: {
    light: color.red,
    dark: color.red,
    todoist: color.red,
    noir: color.red,
    neutral: color.red,
    tangerine: color.red,
  },
  warning: {
    light: color.warning,
    dark: color.warning,
    todoist: color.warning,
    noir: color.warning,
    neutral: color.warning,
    tangerine: color.warning,
  }
});

export const statusForeColor = theme.variants("mode", "status", {
  success: { 
    light: color.white,
    dark: color.white,
    todoist: color.white,
    noir: color.white,
    neutral: color.white,
    tangerine: color.white,
  },
  danger: {
    light: color.white,
    dark: color.white,
    todoist: color.white,
    noir: color.white,
    neutral: color.white,
    tangerine: color.white,
  },
  warning: {
    light: color.white,
    dark: color.white,
    todoist: color.white,
    noir: color.white,
    neutral: color.white,
    tangerine: color.white,
  }
});
