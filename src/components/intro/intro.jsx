import './intro.scss'
import {useState} from 'react';
import Typewriter from 'typewriter-effect';

export default function intro() {
    const [roles, setRoles] = useState(['Software Engineer', 'Scientist', 'Creator'])
    return (
        <div className='intro' id="intro">
            <div className='wrapper'>
                <h1>Hi, I'm Emiko</h1>
                <h2>I'm a <Typewriter
                options={{
                    strings: roles,
                    autoStart: true,
                    loop: true,
                }}
                /></h2>
            </div>
        </div>
    );
}