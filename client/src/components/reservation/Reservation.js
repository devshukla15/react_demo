import { Container, Paper, Typography, Grid, Button } from "@material-ui/core"
import React, { useState } from "react"
import Input from "./Input"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import "date-fns"
import DateFnsUtils from "@date-io/date-fns"
import UseStyles from "./styles"

const initialState = {
  fullName: "",
  email: "",
  person: "",
  startDate: "",
  endDate: "",
}

const Reservation = () => {
  const classes = UseStyles()

  const [reservationData, setReservationData] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch()
  }

  const handleChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value })
  }
  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper} elevation={8}>
        <Typography variant="h5">Reservation</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
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

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                label="start Date"
                name="startDate"
                className={classes.startDate}
                onChange={handleChange}
              />

              <KeyboardDatePicker
                label="End Date"
                name="endDate"
                className={classes.endDate}
                onChange={handleChange}
              />
            </MuiPickersUtilsProvider>
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
