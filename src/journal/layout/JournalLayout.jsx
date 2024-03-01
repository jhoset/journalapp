import { Box, Toolbar } from "@mui/material"
import PropTypes from "prop-types"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/*  NAVBAR drawerWidth */}
            <NavBar drawerWidth={drawerWidth}/>
            {/* SIDEBAR drawerWidth */}
            <SideBar />
            <Box component='main'
                sx={{ flexGrow: 1, p: 3 }}>
                {/* TOOLBAR */}
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

JournalLayout.propTypes = {
    children: PropTypes.node.isRequired
}