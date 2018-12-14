import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add'
import Typography from "@material-ui/core/es/Typography/Typography";
import ExpansionPanel from "@material-ui/core/es/ExpansionPanel/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/es/ExpansionPanelSummary/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/es/ExpansionPanelDetails/ExpansionPanelDetails";

// stylesheet
const styles = theme => ({
    root: {
      width: '100%'
    },
    noPaddingMargin: {
        paddingLeft: 0,
        margin: 0,
        width: '100%',
    },
    withPadding: {
        padding: "0 20px 0 20px",
    }
});

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoItems: [],
            inputText: "",
            inputDate: new Date().getFullYear().toString() + "-"
                + (new Date().getMonth() + 1).toString() + "-"
                + (new Date().getDate()).toString(),
            disabledItems: 0,
        }
    }

    // add a new item to to-do list
    handleAddItem = () => {
        if (this.state.inputText === "")
            return;
        let tempArr = this.state.todoItems.slice();
        tempArr.push({
            key: this.state.todoItems.length == 0
                ? 1
                : this.state.todoItems[this.state.todoItems.length - 1].key + 1,
            text: this.state.inputText,
            date: this.state.inputDate,
            disabled: false,
        });
        this.setState({
            todoItems:tempArr,
            inputText: "",
            inputDate: new Date().getFullYear().toString() + "-"
                + (new Date().getMonth() + 1).toString() + "-"
                + (new Date().getDate()).toString(),
        });
    };

    // when user typing at new to-do input filed
    handleInputChange = (event) => {
        this.setState({inputText: event.target.value});
    };

    // when user changing the due date
    handleDateInputChange = (event) => {
        this.setState({inputDate: event.target.value});
    };

    // when user clicks finish button for a to-do
    // @param index - the index of to-do item in the to-do item list
    handleFinishTodo = (index) => {
        let tempArr = this.state.todoItems.slice();
        tempArr[index - 1].disabled = true;
        this.setState({todoItems: tempArr, disabledItems: this.state.disabledItems + 1});
    };

    render () {
        const {classes} = this.props;

        return (
            <Paper square={true}>
                <List disablePadding={true}>
                    <ListItem>
                        <Input
                            placeholder="Add new To-Do here."
                            value={this.state.inputText}
                            fullWidth
                            onChange={this.handleInputChange}
                        />
                        <Typography
                            variant={"subheading2"}
                            className={classes.withPadding}
                        >
                            Date:
                        </Typography>
                        <Input
                            type="date"
                            defaultValue={
                                new Date().getFullYear().toString() + "-"
                                + (new Date().getMonth() + 1).toString() + "-"
                                + (new Date().getDate()).toString()}
                            variant={"filled"}
                            id={"dateInput"}
                            onChange={this.handleDateInputChange}
                        />
                        <IconButton onClick={this.handleAddItem}>
                            <AddIcon/>
                        </IconButton>
                    </ListItem>

                    {/*if there is to-do item exists, add a divider*/}
                    {(this.state.todoItems.length != this.state.disabledItems) && <Divider/>}

                    {/*display to-do items in reverse order (newly added item on top)*/}
                    {this.state.todoItems.slice().reverse().map((todo) =>
                        <Collapse in={!todo.disabled} key={todo.key}>
                            <ExpansionPanel className={classes.root}>
                                <ExpansionPanelSummary classes={{
                                    root: classes.noPaddingMargin,
                                    expanded: classes.noPaddingMargin,
                                    content: classes.noPaddingMargin,
                                }}>
                                    <ListItem button>
                                        <ListItemText
                                            primary={
                                                <Typography noWrap variant="h6">
                                                    {todo.text}
                                                </Typography>
                                            }
                                            secondary={todo.date}
                                        />
                                        <Checkbox onChange={() => this.handleFinishTodo(todo.key)}/>
                                    </ListItem>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography variant={"subtitle1"}>
                                        test description.
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Collapse>
                    )}
                </List>
            </Paper>
        );
    }
}

export default withStyles(styles)(TodoList);