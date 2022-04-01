import {
	Avatar,
	Container,
	Paper,
	Typography,
	Grid,
	Button,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Input from './Input';
import Icon from './Icon';
import useStyles from './styles';

const Auth = () => {
	const classes = useStyles();

	const [isSignUp, setIsSignUp] = useState(false);

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleSubmit = () => {};

	const handleChange = () => {};

	const googleFailure = (error) => {
		console.log(error);
		console.log('google sign in failed , please try agian later');
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: 'AUTH', data: { result, token } });
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const switchMode = () => {
		setIsSignUp((previsSignUp) => !previsSignUp);
		handleShowPassword(showPassword);
	};

	const handleShowPassword = () => {
		setShowPassword(() => setShowPassword(!showPassword));
	};

	const [showPassword, setShowPassword] = useState(false);

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignUp && (
							<>
								<Input
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<Input
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}
						<Input
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<Input
							name="password"
							label="Password"
							handleChange={handleChange}
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
						/>
						{isSignUp && (
							<Input
								name="confirmPassword"
								label="Confirm Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{isSignUp ? 'Sign Up' : 'Sign In'}
					</Button>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="secondary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<Icon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
					/>

					<Grid container justifyContent="flex-end">
						<Grid item>
							<Button onClick={switchMode}>
								{isSignUp
									? 'already have an account? sign in'
									: "don't have an account sign up"}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
