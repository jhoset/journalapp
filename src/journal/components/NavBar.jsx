import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import PropTypes from "prop-types";

export const NavBar = ({ drawerWidth = 240 }) => {


    return (
        <AppBar position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}>
            <Toolbar>
                <IconButton color="inherit" aria-label="Toggle Menu" sx={{ mr: 2, display: { sm: "none" } }}>
                    <MenuOutlined />
                </IconButton>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" noWrap component='div'> Journal App </Typography>
                    <IconButton color="secondary"> <LogoutOutlined /> </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )

}

NavBar.propTypes = {
    drawerWidth: PropTypes.number
}