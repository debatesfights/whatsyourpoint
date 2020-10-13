import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import React  from 'react';
import {useHistory} from 'react-router-dom'

export  default function Confirm({message}) {
  const [open, setOpen] = React.useState(true);
  const history = useHistory()
  const confirm_msg = message || "Please login first"
  const disagree = () => history.goBack()
  const agree = () => history.push("/login")
    
  return (
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle >{confirm_msg}</DialogTitle>
        <DialogActions>
          <button onClick={disagree} color="primary">
            Go back
          </button>
          <button onClick={agree} color="primary" autoFocus>
            Login
          </button>
        </DialogActions>
      </Dialog>
  );
}