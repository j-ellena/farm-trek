export const themeKey: string = 'theme'

export enum PaletteType {
    Dark = 'dark',
    Light = 'light'
}
const themeValues = {
    dark: PaletteType.Dark,
    light: PaletteType.Light
}
export const { dark, light } = themeValues
