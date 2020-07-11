import React, {useState} from "react";
import propTypes from "prop-types";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton, Input, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
      },
      input: {
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: "black",
          opacity: 1,
        },
      },
      backDropRoot: {
        backgroundColor: 'inherit',
      },
      footer: {
        position: 'fixed',
        height: `${theme.spacing(6)}`,
        bottom: 8,
        left: 0,
        width: '100%',
        zIndex: 1,
      },inputContainer :{
        width: "90%",
        backgroundColor:theme.palette.primary.light,
        padding: "8px auto",
        margin: "auto",
        borderRadius: "25px"
      },

      textArea: {
        paddingLeft: '15px',
        textAlign: 'left',
      },
      messageBoxIcon: {
        marginTop: '.35rem',
        marginRight: '.7rem',
      },
      sendIcon: {
        color: '#ffffff',
      },
      InputFieldContainer: {
        paddingRight: '15px',
        display: "flex",
      },
}));

  

const AddMessage = (props) => {
    let classes = useStyles();
    let [userInput,changeName] = useState("");
    let handleInputChange = (e) => {
        changeName(e.target.value);
    }
    return (
<div className={classes.footer}>
      <form onSubmit={event => {
           event.preventDefault();
           props.addMessage(userInput,"out_going");
           changeName("")
      }}>
        <Grid className={classes.inputContainer} container spacing={1}>
          <Grid
            className={classes.InputFieldContainer}
            item
            xs={10}
            sm={11}
            md={11}
          >
            <Input
              classes={{
                input: classes.input,
              }}
              fullWidth
              disableUnderline
              className={classes.textArea}
              type="text"
              placeholder="Type your message.."
              value={userInput}
              onChange={handleInputChange}
              autoFocus
              {...props}
            />
          </Grid>
          <Grid item xs={2} sm={1} md={1}>
            <IconButton
              className={classes.messageBoxIcon}
              type="submit"
            >
              <SendRoundedIcon className={classes.sendIcon} fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </form>

</div>

    )
}



export default AddMessage;
