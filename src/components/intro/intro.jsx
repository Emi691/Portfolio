import './intro.scss'
import {useState} from 'react';
import Typewriter from 'typewriter-effect';

export default function Intro() {
    const [roles, setRoles] = useState(['Software Engineer', 'Scientist', 'Creator'])
    return (
        <div className='intro' id="intro">
            <h1>Hi, I'm Emiko</h1>
            <div className='wrapper'>
                <h2>I'm a</h2>
                <Typewriter
                options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                }}
                />  
            </div>
        </div>
    );
}