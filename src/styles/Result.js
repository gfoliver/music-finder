import styled from 'styled-components'
import colors from './colors'

export default styled.div`
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 10px 0px #D0D0D0;

    .cover {
        background-image: url(${props => props.cover});
        height: 140px;
        width: 100%;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .overlay {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: #000;
            opacity: .7;
        }

        .disc {
            background-image: url(${props => props.cover});
            background-size: cover;
            background-position: center;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90px;
            height: 90px;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0px 4px 4px rgba(0,0,0,0.2);
            cursor: pointer;

            @keyframes rotateDisc {
                0% {
                    transform: translate(-50%, -50%) rotate(0);
                }

                100% {
                    transform: translate(-50%, -50%) rotate(360deg);
                }
            }

            @keyframes fixButton {
                0% {
                    transform: rotate(360deg);
                }

                100% {
                    transform: rotate(0);
                }
            }

            &.playing {
                animation: forwards rotateDisc 1s infinite;

                button {
                    animation: forwards fixButton 1s infinite;
                }
            }

            button {
                padding: 5px;
                width: 35px;
                height: 35px;
                border-radius: 100%;
                background: #000;
                margin: 0;
                border: none;
                cursor: pointer;

                img {
                    max-width: 100%;
                }
            }
        }
    }

    .text {
        padding: 20px;

        .title {
            font-size: 20px;
            font-weight: bold;
            text-decoration: none;
            color: #000;
            margin-bottom: 5px;
        }

        .artist {
            font-weight: bold;
            font-size: 14px;
            color: ${colors.primary};
        }
    }
`