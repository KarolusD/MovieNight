import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: string

    colors: {
      [key: string]: string
    }

    fonts: {
      prompt: {
        [key: string]: string
      }
      montserrat: {
        [key: string]: string
      }

      sizes: {
        [key: string]: string
      }
    }
    spacing: {
      [key: string]: string
    }
  }
}
