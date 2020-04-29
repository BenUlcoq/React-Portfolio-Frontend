import React from 'react'
import { Paper, Box, Container, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function LinkButton(props) {

  const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(270deg, #FFB800 0%, #FF5C00 100%)',
        border: 0,
        borderRadius: 50,
        color: 'white',
        height: `${props.height ? props.height : '48px'}`,
        padding: '0 30px',
        margin: '10px 10px',
        width: `${props.width ? props.width : 'auto'}`,
        flexGrow: 1,
        flexBasis: '250px',
        order: `${props.order ? props.order : 0}`,
      },
    });

  const classes = useStyles()

  return (
            <Button 
              variant="contained"
              className={classes.root}
              href={props.link}
              startIcon={( props.icon ? props.icon : null )}  
            >
              {props.children}
            </Button>
  )

}