import React from 'react'
import '../App.css';
import { Button } from './Button'
import './MainPage.css'

function MainPage() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1 className='title'>REKINDLING CONNECTIONS</h1>
            <p>What are you waiting for? Sign up today!</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    SIGN UP
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                onClick={console.log('hey')}>
                ABOUT US <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default MainPage
