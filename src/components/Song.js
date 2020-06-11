import React, { useEffect, useState } from 'react'
import Container from '../styles/Container'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

export default function Song() {
    const {artist, title} = useParams()
    const [lyrics, setLyrics] = useState('')

    useEffect(() => {
        api.get(`/v1/${encodeURI(artist)}/${encodeURI(title)}`).then(result => {
            setLyrics(result.data.lyrics)
        }).catch(error => {
            console.log(error)
        })
    }, [artist, title])

    return(
        <div className="Song page">
            <Container>
                <Link to="/"><h1>Music Finder</h1></Link>
                <div className="card">
                    <div className="title">{title}</div>
                    <div className="artist">{artist}</div>
                    <p>Lyrics: </p>
                    {lyrics && <div className="lyrics">{lyrics}</div>}
                </div>
            </Container>
        </div>
    )
}