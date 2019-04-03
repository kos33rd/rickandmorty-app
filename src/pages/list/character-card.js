import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import style from './character-card.css'

export const CharacterCard = ({ character, handleDetailsClick }) => (
    <Grid item sm={6} md={4} lg={3}>
        <Card className={style.card}>
            <CardMedia
                className={style.media}
                image={character.image}
                title="Avatar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {character.name}
                </Typography>
                <Typography>
                    Origin: {character.origin.name}
                </Typography>
            </CardContent>
            <CardActions  className={style.bg}>
                <Button size="small" color="primary" onClick={handleDetailsClick}>
                    <span className={'class-name'}>Details</span>
                </Button>
            </CardActions>
        </Card>
    </Grid>
)
