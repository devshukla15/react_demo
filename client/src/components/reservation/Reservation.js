import { Container, Paper, Typography, Grid, Button } from "@material-ui/core"
import React from "react"
import Input from "./Input"
import UseStyles from "./styles"

const Reservation = () => {
  const classes = UseStyles()

  const handleSubmit = () => {}

  const handleChange = () => {}
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5">Reservation</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="fullName"
              label="Full Name"
              handleChange={handleChange}
              autoFocus
              fullWidth
            />

            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="person"
              label="Number of Person"
              handleChange={handleChange}
            />

            <Input
              name="Date"
              label="Date"
              handleChange={handleChange}
              type="password"
            />
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Book Now
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default Reservation
