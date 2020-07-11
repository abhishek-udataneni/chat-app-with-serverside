import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from "@material-ui/core/IconButton";
import { Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { EditDialog } from '../containers/EditDialog';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        padding: '8px 24px 24px',
        marginTop: '64px',
        marginBottom: '48px',
        height: 'calc(100vh - 112px)',
        overflow: 'auto',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
}));

const scrollToBottom = progressBot => {
    if (progressBot.current) {
      progressBot.current.scrollIntoView()
    }
  };

const MessagesList = ({messages}) => {
    const classes = useStyles();

    const progressBot = React.useRef(null);
    useEffect(() => {
        scrollToBottom(progressBot);
    });

    return (
    <div style={{display: "flex",width: '100%'}}>
        <CssBaseline />
        <AppBar position="fixed" elevation={1} color="inherit">
            <Toolbar>
                <IconButton><KeyboardBackspaceIcon  /></IconButton>
                <Avatar alt="Remy Sharp" src="../../assets/profile_pic.jpg" className={classes.large} />
            </Toolbar>
        </AppBar>
        <div className={classes.container}>
            <div>
                {messages.map(message => (
                    <Message key={message.id} {...message}/>
                ))}
        <span ref={progressBot} />
             </div>
        </div>
    </div>
    );
}

export default MessagesList;