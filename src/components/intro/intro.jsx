import './intro.scss'
import Typewriter from 'typewriter-effect';

export default function intro() {
    return (
        <div className='intro' id="intro">
            <div className='wrapper'>
                <h1>Hi, I'm Emiko</h1>
                <h2>I'm a <Typewriter
                options={{
                    strings: ['Software Engineer', 'Scientist', 'Creator'],
                    autoStart: true,
                    loop: true,
                }}
                /></h2>
            </div>
        </div>
    );
}