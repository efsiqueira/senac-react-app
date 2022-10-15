import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

export const PageLayout = () => {

  const DrawerApp = () => (
    <Box>
      <Typography variant="h5" >
        Meu menu
      </Typography>
      <List>
        <ListItem>
          <ListItemButton component="a" href="/">
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/sobre">
            <ListItemText primary={"Sobre"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/noticias">
            <ListItemText primary={"Notícias"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="/contato">
            <ListItemText primary={"Contato"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
    
  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false)

    const comportamentoMenu = () => {
      setAberto(!aberto)
    }

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              onClick={comportamentoMenu}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
          </Toolbar>              
        </AppBar>
        <Box>
          <Drawer
            open={aberto}
            onClose={comportamentoMenu}
          >
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    )
  }

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "80px" }}>
        <Outlet />
      </Box>
    </>
  )
}