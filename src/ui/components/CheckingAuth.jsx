import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <CircularProgress color="primary" />
        <strong>Loading...</strong>
      </div>

    </Grid>
  )
}
