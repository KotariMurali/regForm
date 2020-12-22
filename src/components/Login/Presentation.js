import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Paper, FormControlLabel, Checkbox, Button, } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiBottomNavigationAction-wrapper": {
            position: "relative",
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));
function Presentation(props) {
    const { handleEmailChange, handleClear, handlePasswordChange } = props
    const classes = useStyles();

    return (

        <div className="login" >
            <div className="login__main">
                <Paper className="login__card" elevation={0}>
                    <div className="login__form">
                        <h4>LOGIN FORM</h4>
                        <ValidatorForm autoComplete="off">
                            <TextValidator
                                className="login__mail"
                                id="login_mail"
                                variant="outlined"
                                label="Email"
                                size="small"
                                value={props.emailId}
                                onChange={handleEmailChange}
                                type="email"
                                name="email"
                                validators={["required", "isEmail"]}
                                errorMessages={["this field is required", "email is not valid"]}
                                fullWidth
                            />
                            <TextValidator
                                className="login__password"
                                id="login_password"
                                label="Password"
                                variant="outlined"
                                size="small"
                                type={props.showPassword ? "text" : "password"}
                                name="Password"
                                value={props.Password}
                                onChange={handlePasswordChange}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                                fullWidth
                            />
                            <FormControlLabel
                                name="agreement"
                                control={
                                    <Checkbox
                                        name="checkedB"
                                        id="login_checkbox"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                            <div className="loginbuttons">
                                <div className={classes.root} style={{ position: "relative" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        id="login_loginbutton"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </div>
                                <Button
                                    className="capitalize"
                                    onClick={handleClear}
                                    variant="contained"
                                    id="login_clearbutton"
                                    color="primary"
                                >
                                    Clear
                                </Button>
                            </div>
                        </ValidatorForm>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Presentation
