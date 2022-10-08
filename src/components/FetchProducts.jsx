import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const url = 'https://dummyjson.com/products'

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        setData(respData.products)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error(error)
      })
  }, [])

  return (
    <Grid container spacing={3}>
      {
        isLoading && (<div>Carregando</div>)
      }
      {
        data.map((produto) => (
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 345 }}
              key={produto.id}
              style={{ marginBottom: "2rem" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={produto.thumbnail}
                alt={produto.brand}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {produto.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {produto.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Compartilhar</Button>
                <Button size="small">Conheça mais</Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default FetchProducts