
import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
export const SideBar = ({ drawerWidth = 240 }) => {

    return (
        <Box component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }} >
                <Toolbar>
                    <Typography variant="h6" noWrap>Jhoset NG</Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['January', 'February', 'March', 'April', 'May', 'June'].map(item => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container direction="column">
                                        <ListItemText primary={item} />
                                        <ListItemText secondary={'Text Example'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    )
}

SideBar.propTypes = {
    drawerWidth: PropTypes.number
}