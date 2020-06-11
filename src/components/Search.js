import React, { useState } from 'react'
import Container from '../styles/Container'
import SearchForm from '../styles/SearchForm'
import Icon from '../assets/img/search.svg'
import {useHistory, Link} from 'react-router-dom'
import { useEffect } from 'react'
import api from '../services/api'
import Result from './Result'

export default function Search() {
    const history = useHistory()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (history.location.state.query) {
            setQuery(history.location.state.query)

            api.get('/suggest/' + history.location.state.query)
                .then(response => {
                    setResults(response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [history.location.state.query])

    function handleSubmit(e) {
        e.preventDefault();
        setResults([])
        setLoading(true)

        api.get('/suggest/' + query).then(response => {
            setResults(response.data.data)
        }).catch(error => {
            console.log(error)
        }).finally(() => setLoading(false))
    }

    return(
        <div className="Search page">
            <Container>
                <Link to="/"><h1>Music Finder</h1></Link>
                <SearchForm onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Type in an artist or music name..." 
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        required
                    />
                    <button type="submit"><img src={Icon} alt="search"/></button>
                </SearchForm>
                <div className="results">
                    {!loading && results.map((music, index) => (
                        <Result 
                            key={index}
                            cover={music.album.cover_big} 
                            title={music.title}
                            artist={music.artist.name}
                            preview={music.preview}
                        />
                    ))}
                    {loading && (<div>Loading...</div>)}
                </div>
            </Container>
        </div>
    )
}