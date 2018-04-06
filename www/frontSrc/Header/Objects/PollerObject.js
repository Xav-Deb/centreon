import React from 'react'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Popover from 'material-ui/Popover'
import Typography from 'material-ui/Typography'
import PollerIcon from "../icons/PollerIcon"

const styles = theme => ({
  root: {
    position: 'relative',
    fontFamily: theme.font.openSans,
  },
  'a': {
    color: '#0072CE',
    '&:hover': {
      backgroundColor: '#064166'
    },
    '&:visited': {
      color: '#10069F'
    }
  },
  status: {
    margin: '4px',
    color: '#fff',
    width: 38,
    height: 38,
    '& span': {
      fontSize: 16
    },
  },
  errorStatus: {
    margin: '10px 4px',
    width: 46,
    height: 46,
    backgroundColor: theme.palette.error.main,
    '& span': {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600'
    },
  },
  chip: {
    height: '8px',
    width: '8px',
    borderRadius: 20,
    display: 'inline-table',
    marginRight: 6,
  },
  icon: {
    width: 34,
    height: 34,
    display: 'inline-flex',
    verticalAlign: 'middle',
    margin: '6px',
    color: '#A7A9AC',
    cursor: 'pointer',
    '&:hover': {
      color: '#D1D2D4',
    }
  },
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  objectDetails: {
    padding: '10px 16px',
    borderBottom: '1px solid #d1d2d4',
    '&:last-child' : {
      borderBottom: 'none',
    }
  },
  total: {
    float: 'right',
    marginLeft: 34,
  },
})

const PollerObject = (
  {classes, object, anchorEl, open, handleClose, handleOpen,
  }) => (
  <div className={classes.root}>
    <PollerIcon
      alt="poller icon"
      aria-haspopup="true"
      onClick={handleOpen}
      viewBox="6 156 600 600"
      className={classes.icon}
    />
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorReference='anchorEl'
      anchorPosition={{ top: 500, left: 400 }}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <div className={classes.objectDetails}>
        <Typography variant="caption" gutterBottom>
          <a href="" title="all pollers list">
            All pollers
          </a>
          <span className={classes.total}>345</span>
        </Typography>
      </div>
      <div className={classes.objectDetails}>

      </div>
      <div className={classes.objectDetails}>
        <Typography variant="caption" gutterBottom>
          12 Configurations has been changed
          <a href="">
            <Button>
              Configure pollers
            </Button>
          </a>
        </Typography>
      </div>
      }

    </Popover>
  </div>
)

export default withStyles(styles)(PollerObject)
