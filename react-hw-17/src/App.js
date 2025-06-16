import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

const StyledButton = styled(Button)`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
`

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
    },
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <StyledButton variant="contained" onClick={toggleTheme} color="primary">
          Toggle Theme
        </StyledButton>
      </Box>
    </ThemeProvider>
  )
}

export default App
