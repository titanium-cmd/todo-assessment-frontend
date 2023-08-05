import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { notify } from "reapop";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { UserCredentials } from "src/models/user";
import { userLogin } from "src/store/auth/authService";
import { clearAuthState } from "src/store/auth/authSlice";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status, message } = useAppSelector((state) => state.auth)
  const [credentials, setCredentials] = useState<UserCredentials>({
    username: '',
    password: '',
  })

  useEffect(() => {
    if (status === 'rejected') {
      dispatch(notify(message, 'error'))
      dispatch(clearAuthState())
    } else if (status === 'fulfilled') {
      dispatch(notify(message, 'success'))
      dispatch(clearAuthState())
      setTimeout(() => {
        navigate('/')
      }, 300);
    }
    // eslint-disable-next-line
  }, [status])

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { username, password } = credentials;
    if (password === '' || username === '')
      return dispatch(notify('Please fill all fields', 'error'))
    dispatch(userLogin({ username, password }))
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <Grid container height={'100vh'} bgcolor={'#ededed'}>
      <Box display={'flex'} alignContent={'center'} bgcolor={'white'} height={60} justifyContent={'space-between'} width={'100vw'}>
        <img src="buzsquare.png" style={{ margin: 'auto 0px' }} height={35} alt="buzsquare_logo" />
      </Box>
      <Box
        maxWidth={'sm'}
        bgcolor={'white'}
        sx={{
          borderRadius: 2,
          px: 4,
          py: 6,
          margin: '5rem auto',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={handleInputChange}
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleInputChange}
            label="Password"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoadingButton
            type="submit"
            fullWidth
            color='primary'
            startIcon={null}
            loading={status === 'pending'}
            loadingPosition="start"
            variant="contained"
            sx={{ p: 1.3, mt: 1.5, mb: 1.5 }}
          >
            LOGIN
          </LoadingButton>
          <Grid container>
            <Grid item xs>
              <Link href="https://www.buzsquare.com/user/password/request" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.buzsquare.com/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default LoginPage;