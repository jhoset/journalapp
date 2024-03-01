import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import PropTypes from "prop-types";
import { darkBlueTheme } from "./darkBlueTheme";

export const AppTheme = ({ children }) => {


    return (
        <ThemeProvider theme={darkBlueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )

}

AppTheme.propTypes = {
    children: PropTypes.node
}

