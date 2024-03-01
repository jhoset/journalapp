import { StarBorder } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: 'secondary.main', borderRadius: 2.5}}>
                <Grid item xs={12}>
                    <StarBorder sx={{ fontSize: 100, color: "gray" }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="gray" variant="h5" >
                        Select new entry
                    </Typography>
                </Grid>
        </Grid>
    )
}