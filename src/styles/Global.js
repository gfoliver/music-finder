import { createGlobalStyle } from 'styled-components'
import colors from './colors'

import RobotoBold from '../assets/fonts/Roboto-Bold.ttf'
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold});
        font-weight: 700;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular});
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        margin: 0;
        background-color: ${colors.background};
        min-height: 100vh;
        font-family: 'Roboto', sans-serif;

        input, button {
            font-family: 'Roboto', sans-serif;
            &:active, &:focus {
                outline: none;
            }
        }
    }

    h1 {
        font-size: 50px;
        color: ${colors.primary};
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
    }

    p {
        font-size: 20px;
        margin-bottom: 30px;
        text-align: center;
    }

    .Home {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .Search {
        padding: 30px 0;

        a {
            text-decoration: none;
        }

        h1 {
            font-size: 30px;
            margin-bottom: 30px;
        }

        form {
            max-width: 100%;
        }

        .results {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
            margin-top: 50px;
        }
    }

    .Song {
        padding: 30px 0;

        a {
            text-decoration: none;
        }

        h1 {
            font-size: 30px;
            margin-bottom: 30px;
        }

        .card {
            padding: 20px;
            border-radius: 16px;
            background: #fff;
        }

        .title {
            font-size: 30px;
            font-weight: bold;
        }

        .artist {
            font-size: 30px 20px;
            font-weight: bold;
            color: ${colors.primary};
            margin-bottom: 30px;
        }

        p {
            text-align: left;
        }

        .lyrics {
            white-space: pre-line;
            font-size: 14px;
            line-height: 1.2em;
        }
    }
`