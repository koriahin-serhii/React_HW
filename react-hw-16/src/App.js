import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material'

function App() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React приложение с использованием Material UI. Вы можете
            закрыть его или согласиться.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose} autoFocus>
            Согласен
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default App
