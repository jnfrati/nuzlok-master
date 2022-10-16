import { blue, gray, green, red, grayDark, blueDark, redDark, greenDark } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const { styled, createTheme} = createStitches({
    theme: {
      colors: {
        ...gray,
        ...blue,
        ...red,
        ...green
      }
    }
  })
  

const darkTheme = createTheme({
    colors: {
        ...grayDark,
        ...blueDark,
        ...redDark,
        ...greenDark,
    }
})

export {
    styled,
    darkTheme
}