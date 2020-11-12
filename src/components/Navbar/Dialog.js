import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DehazeIcon from '@material-ui/icons/Dehaze';

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  function handleCliekNews() { history.push("/news"); handleClose(); }
  function handleCliekTv() { history.push("/tv"); handleClose(); }
  function handleCliekTeams() { history.push("/teams"); handleClose(); }
  function handleCliekMatches() { history.push("/matches"); handleClose(); }
  function handleCliekClub() { history.push("/club"); handleClose(); }
  function handleCliekFans() { history.push("/fans"); handleClose(); }
  function handleCliekLogin() { history.push("/login"); handleClose(); }

  const ListItemTextStyle = {
    padding:"5px 0px", 
    blockSize:"20px",
    verticalAlign:"center",
  }

  return (
    <div>
      <Button variant="outlined" color="red" onClick={handleClickOpen}
        style={{ border:"1px solid white", backgroundColor:"white" }}
      >
        <DehazeIcon
            style={{ color: "rgba(220, 5, 44)" }}
        />
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} style={{ backgroundColor: "rgba(220, 5, 44)" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
            <IconButton edge="end" color="rgba(220, 5, 44)" onClick={handleClose} aria-label="close">
              <CloseIcon style={{ color:"white" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button onClick={handleCliekNews}>
            <ListItemText primary="News" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleCliekTv}>
            <ListItemText primary="FC Bayern.tv" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleCliekTeams}>
            <ListItemText primary="Teams" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleCliekMatches}>
            <ListItemText primary="Matches" style={ListItemTextStyle} />
          </ListItem>
          <Divider />

          <ListItem button onClick={handleCliekClub}>
            <ListItemText primary="Club" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleCliekFans}>
            <ListItemText primary="Fans" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleCliekLogin}>
            <ListItemText primary="Log in" style={ListItemTextStyle} />
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}