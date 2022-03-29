import {
	Avatar,
	Container,
	Paper,
	Typography,
	Grid,
	TextField,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import Input from './Input';
import useStyles from './styles';

const Auth = () => {
	const classes = useStyles();

	const handleSubmit = () => {};

	const handleChange = () => {};

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const [showPassword, setShowPassword] = useState(false);

	const isSignUp = true;

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={3}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography variant="h5">{isSignUp ? 'Sign In' : 'Sign Up'}</Typography>
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
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

export default Auth;
