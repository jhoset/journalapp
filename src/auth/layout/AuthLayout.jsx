import { Grid, Typography } from "@mui/material"
import PropTypes from "prop-types";

export const AuthLayout = ({ children, title }) => {
    return (
        <Grid container
            
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}>
            <Grid item xs={12} sm={8} md={6} lg={4}
                className="box-shadow"
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>
                <Typography variant="h5" sx={{ mb: 2, textAlign: "center", fontWeight: 500, color: "primary.main" }} >
                    {title}
                </Typography>
                {/* CHILDREN */}
                {
                    children
                }
            </Grid>
        </Grid>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}