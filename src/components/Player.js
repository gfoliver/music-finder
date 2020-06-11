import React from 'react'
import PlayIcon from '../assets/img/play.svg'
import PauseIcon from '../assets/img/pause.svg'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Player({url}) {
    const [play, setPlay] = useState(false)
    const [audio, setAudio] = useState(null)

    function handlePlay() {
        setPlay(!play);
    }

    useEffect(() => {
        async function p() {
            if (play && ! audio)
                await setAudio(new Audio(url))

            if (play && audio) {
                audio.play()

                audio.addEventListener('ended', () => {
                    setPlay(false)
                })
            }
            else if (!play && audio) {
                audio.pause()
                setAudio(null)
            }
        }

        p()
    }, [play, audio, url])

    return (
        <div className="cover">
            <div className="overlay"></div>
            <div className={play ? 'disc playing' : 'disc'} onClick={handlePlay}>
                <button>
                    <img src={play ? PauseIcon : PlayIcon} alt="play" />
                </button>
            </div>
        </div>
    )
}