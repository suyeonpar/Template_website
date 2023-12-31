import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {styled } from 'styled-components'
import { ToggleTheme } from '../store'


const ASide = styled.div`
        position: fixed;
        z-index: 99;
        right: 20px;
        bottom: 20px;
        box-shadow: 0px 0px 3px gray;
        background-color:  ${({$isdark}) => ($isdark === 'light' ? '#fff' : '#333')};
        border-radius: 50%;
        cursor: pointer;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        svg{
            color: ${({$isdark}) => ($isdark === 'light' ? '#000' : '#d9d9d9')};
        }
    `

function Aside() {
    const theme = useSelector(state => state.dark);
    const dispatch = useDispatch();

    return (
        <>
            <ASide $isdark={theme} onClick={() => {dispatch(ToggleTheme())}}>
                <FontAwesomeIcon icon={theme === 'light' ?  faMoon : faSun} size="lg"/>
            </ASide>
        </>
    )
}

export default Aside