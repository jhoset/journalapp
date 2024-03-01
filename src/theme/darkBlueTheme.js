import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const darkBlueTheme = createTheme({
    palette: {
        primary: {
            main: "#194F80"
        },
        secondary: {
            main: "#edf2f8"
        },
        error: {
            main: red.A400
        }
    }

})