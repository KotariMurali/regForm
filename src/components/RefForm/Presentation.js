import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { TextField, Grid, Button, Card, MenuItem } from "@material-ui/core";
import '../../styles/regForm.css'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const gender = [
  {
    value: "male",
    label: "male",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "other",
    label: "other",
  },
];
const Presentation = (props) => {
  const {selectedDate,handleDateChange,handleFirstName,firstName,Email,Phone,handlePhone,handleEmail,LastName,handleLastName,EmailError,PhoneError,handleClear}=props
  return (
    <div>
      <Card className="Card">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First name"
              name="firstname"
              variant="standard"
              value={firstName}
              onChange={handleFirstName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="last name"
              name="lastname"
              variant="standard"
              value={LastName}
              onChange={handleLastName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="email*"
              name="email"
              variant="standard"
              value={Email}
              onChange={handleEmail}
              helperText={EmailError}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="phone*"
              value={Phone}
              onChange={handlePhone}
              type={Number}
              name="phone"
              helperText={PhoneError}
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              helperText="Please select your gender"
            >
              {gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="DOB"
                  label="DOB"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} sm={12}>
           <Button disabled={EmailError&&PhoneError}>submit</Button>
          </Grid>
        </Grid>
      </Card>
      {/* <button onClick={handleClear}>kmgksfmsd</button> */}
    </div>
  );
};

export default Presentation;
