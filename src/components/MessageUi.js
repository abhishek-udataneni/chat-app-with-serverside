import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import classNames from "classnames";
import { EditDialog } from '../containers/EditDialog';



const useStyles = makeStyles(theme => ({
    questionClass: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        borderRadius: `${theme.spacing(2)}px`,
        borderBottomRightRadius: '0px',
        padding: '20px 24px',
        width: 'fit-content',
        float: 'right',
        minWidth: '176px',
        marginTop: `${theme.spacing(2)}px`,
        wordBreak: 'break-word',
        position: "relative"
      },
      answerClass: {
        backgroundColor: "inherit",
        color: "black",
        border: "1px dotted black",
        borderRadius: `${theme.spacing(2)}px`,
        borderBottomRightRadius: '0px',
        padding: '20px 24px',
        width: 'fit-content',
        float: 'left',
        minWidth: '176px',
        marginTop: `${theme.spacing(2)}px`,
        wordBreak: 'break-word',
      },
      emptyGrid: {
        [theme.breakpoints.down('sm')]: {
          padding: '0px',
          margin: '0px',
        },
      },
      currentTime: {
        fontStyle: 'italic',
        marginRight: '4px',
        top: "4px",
        right: "16px",
        position: "absolute",
        color: props =>  props.author === "income" ? "white" : "inherit",
      },
      paddingTopZero: {
        paddingTop: '0px',
      },
      addMarginBottom: {
        marginBottom: `${theme.spacing(1)}px`,
      },

}));


function MessageUi(props) {
     const {  currentTime,id, question,author, textAlign="left", dir="" } = props;
     const classes = useStyles(props);
  return (
    <Grid container direction={ author === "income" ?  "row" : "row-reverse"}>
      <Grid item xs={2} sm={3} className={classes.emptyGrid} />
      <Grid item xs={10} sm={9}>
        <Typography
          variant="body1"
          className={classNames({[classes.questionClass] : author === "income"}, {[classes.answerClass]: author === "out_going" })}
          gutterBottom
          align={textAlign}
          dir={dir}
          style={{position: "relative"}}
        >
          <Typography variant="srOnly">I say</Typography>
          {question}
          <Typography
          variant="caption"
          align="right"
          color="textSecondary"
          className={classes.currentTime}
          component="span"
        >
          {currentTime}
        </Typography>

        <EditDialog id={id} author={author}/>
        </Typography>
 
      </Grid>
    </Grid>
  );
}


export default MessageUi;