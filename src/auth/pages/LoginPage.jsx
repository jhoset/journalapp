import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Email" type="email" placeholder="example@gmail.com" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type="password" placeholder="*********" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <Button variant="contained" fullWidth>
                                    {/* <Login /> */}
                                    <Typography sx={{ ml: 1 }} > Login</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button variant="outlined" fullWidth>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}> Google </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="end">
                            Do not have an account?
                            <Link component={RouterLink} color='inherit' to="/auth/register" sx={{ ml: 1 }}>Sign up</Link>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}