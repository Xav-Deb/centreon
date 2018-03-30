import React from 'react'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import numeral from 'numeral'
import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    position: 'relative',
    fontFamily: theme.font.openSans,
    '&:before': {
      width: 1,
      height: 30,
      backgroundColor: '#d1d2d4',
      content: '""',
      position: 'absolute',
      top: 18,
      margin: '0px -5px',
    },
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
  warningStatus: {
    margin: '10px 4px',
    color: '#fff',
    width: 40,
    height: 40,
    '& span': {
      fontSize: 16
    },
    backgroundColor: theme.palette.warning.main,
  },
  unknownStatus: {
    margin: '10px 4px',
    color: '#fff',
    width: 40,
    height: 40,
    '& span': {
      fontSize: 15,
      fontWeight: '600'
    },
    backgroundColor: theme.palette.unknown.main,
  },
  avatar: {
    width: 34,
    height: 34,
    display: 'inline-flex',
    verticalAlign: 'middle',
    margin: '6px',
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

const ServiceObject = ({
    classes, object, anchorEl, open, handleClose, handleOpen,
    critical, warning, unknown, ok, pending, total, url
}) => (
  <div className={classes.root}>
      <Avatar
        alt="centreon object"
        src={'./img/icons/' + object + '.png'}
        className={classes.avatar}
        aria-haspopup="true"
        onClick={handleOpen}
      />
      <Button variant="fab"
              className={(classes.status, classes.errorStatus)}>
        {numeral(critical.unhandled).format('0a')}
      </Button>
      <Button variant="fab" mini
              className={( classes.status, classes.warningStatus)}>
        {numeral(warning.unhandled).format('0a')}
      </Button>
      <Button variant="fab" mini color="primary"
              className={(classes.status, classes.unknownStatus)}>
        {numeral(unknown.unhandled).format('0a')}
      </Button>

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
            <a href={url} title="all services list">
              All services
            </a>
            <span className={classes.total}>{total}</span>
          </Typography>
        </div>
        <div className={classes.objectDetails}>
          <Typography variant="caption" gutterBottom>
            <span className={classes.chip} style={{backgroundColor: '#e00b3d'}}></span>
            <a href={critical.url} title="services critical list">
              {critical.unhandled} Unhandled problems
            </a>
            <span className={classes.total}> / {critical.total}</span>
          </Typography>
        </div>
        <div className={classes.objectDetails}>
          <Typography variant="caption" gutterBottom>
            <span className={classes.chip} style={{backgroundColor: '#FF9A13'}}></span>
            <a href={warning.url} title="services warning list">
              {warning.unhandled} Warning services
            </a>
            <span className={classes.total}> / {warning.total}</span>
          </Typography>
        </div>
        <div className={classes.objectDetails}>
          <Typography variant="caption" gutterBottom>
            <span className={classes.chip} style={{backgroundColor: '#bcbdc0'}}></span>
            <a href={unknown.url} title="services unknown list">
              {unknown.unhandled} Unknown services
            </a>
            <span className={classes.total}> / {unknown.total}</span>
          </Typography>
        </div>
        <div className={classes.objectDetails}>
          <Typography variant="caption" gutterBottom>
            <span className={classes.chip} style={{backgroundColor: '#88b917'}}></span>
            <a href={ok.url} title="services ok list">
              {ok.total} Ok services
            </a>
          </Typography>
        </div>
        {pending.total > 0 ?
          <div className={classes.objectDetails}>
            <Typography variant="caption" gutterBottom>
              <span className={classes.chip} style={{backgroundColor: '#2AD1D4'}}></span>
              <a htef={pending.url} title="pending services list">
                {ok.total} Pending services
              </a>
            </Typography>
          </div> : ''
        }
      </Popover>
  </div>
)

export default withStyles(styles)(ServiceObject)
