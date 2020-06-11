import styled from 'styled-components'
import colors from './colors'

export default styled.form`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    position: relative;

    input {
        width: 100%;
        padding: 20px 120px 20px 30px;
        height: 80px;
        border: solid 2px #D0D0D0;
        border-radius: 16px;
        box-shadow: 0px 10px 0px rgba(0,0,0,0.05);
        font-size: 16px;
    }

    button {
        position: absolute;
        right: 20px;
        top: 17px;
        background-color: ${colors.secondary};
        color: '#FFF';
        box-shadow: 0px 6px 0px #224870;
        padding: 8px 30px;
        border-radius: 8px;
        border: none;
        height: 40px;
        cursor: pointer;
        color: #fff;
        transition: all .3s ease;

        &:hover, 
        &:active {
            background-color: ${colors.detail};
            top: 20px;
            box-shadow: 0px 1px 0px ${colors.detail};
        }
    }
`