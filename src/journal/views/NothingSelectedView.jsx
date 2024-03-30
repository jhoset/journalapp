import { StarBorder } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export const NothingSelectedView = () => {


    const { messageSaved } = useSelector(state => state.journal)

    useEffect(() => {
        if (messageSaved.trim().length) {
            Swal.fire('Note Updated', messageSaved, 'success');
        }
    }, [messageSaved])

    return (
        <Grid container
            className="animate__animated animate__fadeIn animate__faster"
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 120px)', backgroundColor: 'secondary.main', borderRadius: 2.5 }}>
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