import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import {withStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import FilledInput from "@material-ui/core/es/FilledInput/FilledInput";

const styles = {
    icon: {
        padding: '0 8px',
    },
    title: {
        flex: 1,
    },
    searchField: {
        margin: 0,
        padding: 0,
    },
    searchPlaceholder: {
        color: "#ffffff"
    },
    searchInputField: {
        color: "#ffffff"
    }
};

class NavBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <CalendarIcon className={classes.icon}/>
                        <Typography color="inherit" variant="title" align="left" className={classes.title}>
                            To-Do
                        </Typography>
                        <FormControl className={classes.searchField} variant={"filled"} margin={"dense"}>
                            <InputLabel
                                htmlFor={"searchArea"}
                                classes={{
                                    root: classes.searchPlaceholder,
                                    focused: classes.searchPlaceholder,
                                    shrink: classes.searchPlaceholder
                                }}
                            >
                                Search
                            </InputLabel>
                            <FilledInput className={classes.searchInputField} id={"searchArea"}/>
                        </FormControl>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);