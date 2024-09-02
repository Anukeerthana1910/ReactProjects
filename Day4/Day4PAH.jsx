import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    // Implement your login logic here
    if (username && password) {
      console.log('Username:', username);
      console.log('Password:', password);
      // Close the dialog on successful login
      handleClose();
    } else {
      // Optionally show an error message or handle validation
      console.log('Please enter both username and password');
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        data-testid="login"
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            label="Username"
            data-testid="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            data-testid="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button data-testid="cancel" onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button data-testid="dia-login" onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
