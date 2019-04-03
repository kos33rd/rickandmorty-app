import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

import styles from "./character-details.css"

export class CharacterDetails extends React.Component {

    state = { character: void 0 }

    loadCharacterDetails = (characterId) => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({ character: data })
            })
    }

    componentDidMount() {
        if (this.props.match.params) {
            this.loadCharacterDetails(this.props.match.params.id)
        }
    }


    render() {

        const { character } = this.state

        if (!character) {
            return <h3>Loading</h3>
        }

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} md={6} lg={4}>
                    <Card className={styles.card}>
                        <CardMedia
                            className={styles.media}
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

                            <hr/>

                            <Table className={''}>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">Gender</TableCell>
                                        <TableCell align="right">{character.gender}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Location</TableCell>
                                        <TableCell align="right">{character.location.name}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Species</TableCell>
                                        <TableCell align="right">{character.species}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Status</TableCell>
                                        <TableCell align="right">{character.status}</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell component="th" scope="row">Type</TableCell>
                                        <TableCell align="right">{character.type}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}
