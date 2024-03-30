import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
    email: 'joplix@google.com',
    password: '123456',
    displayName: 'Joplix Nina'
}

const formValidations = {
    email: [(value) => value.includes('@'), 'Email should have @'],
    password: [(value) => value.length >= 6, 'Password should be at least 6 characters'],
    displayName: [(value) => value.length >= 1, 'Full Name should be at least 1 character']
}

export const RegisterPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isAuthenticating = useMemo(() => status === 'Checking', [status]);

    const { email, password, displayName, onInputChange, formState,
        emailValid, passwordValid, displayNameValid, isFormValid } = useForm(formData, formValidations);

    const onSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title="Create an Account">

            <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            name="displayName"
                            onChange={onInputChange}
                            value={displayName}
                            label="Full Name"
                            type="text"
                            placeholder="Your Name"
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="email"
                            onChange={onInputChange}
                            value={email}
                            label="Email"
                            type="email"
                            placeholder="example@gmail.com"
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="password"
                            onChange={onInputChange}
                            value={password}
                            label="Password"
                            type="password"
                            placeholder="*********"
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
                            {
                                errorMessage && (
                                    <Grid item xs={12}>
                                        <Alert severity="error" > {errorMessage} </Alert>
                                    </Grid>
                                )
                            }
                            <Grid item xs={12}>
                                <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
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