import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Create an Account">
            <form >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField label="Full Name" type="text" placeholder="Your Name" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" type="email" placeholder="example@gmail.com" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type="password" placeholder="*********" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth>
                                    {/* <LoginOutlined /> */}
                                    <Typography sx={{ ml: 1 }} > Sign up </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="end">
                            Already have an account?
                            <Link component={RouterLink} color='inherit' to="/auth/login" sx={{ ml: 1 }}>Log in</Link>
                        </Grid>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}