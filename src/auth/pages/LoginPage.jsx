import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startEmailAndPasswordSignIn, startGoogleSignIn } from "../../store/auth"
import { useMemo } from "react"

const initialValue = {
    email: 'joplix@google.com',
    password: '123456'
}
export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, formState, onInputChange } = useForm(initialValue);

    const isAuthenticating = useMemo(() => status === 'Checking', [status]);

    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log({ email, password });
    //     dispatch(checkingAuth(email, password))
    // }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
        console.log('Google Login')
    }

    const onEmailPasswordSignIn = (event) => {
        event.preventDefault();
        dispatch(startEmailAndPasswordSignIn(formState))
        console.log('Email and Password Login')
    }


    return (
        <AuthLayout title="Login">
            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onEmailPasswordSignIn}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField value={email} onChange={onInputChange} name="email" label="Email" type="email" placeholder="example@gmail.com" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={password} onChange={onInputChange} name="password" label="Password" type="password" placeholder="*********" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        {
                            errorMessage && (
                                <Grid item xs={12}>
                                    <Alert severity="error" > {errorMessage} </Alert>
                                </Grid>
                            )
                        }
                        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                                    {/* <Login /> */}
                                    <Typography sx={{ ml: 1 }} > Login</Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="outlined" fullWidth>
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