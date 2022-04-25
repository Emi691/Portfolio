import './navigation.scss'
import {useState} from 'react'

export default function Navigation(props) {
    const [active, setActive] = useState(true)
    return (
        <div className='nav'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>e</a>
                </div>
                <div className='right'>
                    <div className={`dropdown + ${active === true ? 'active' : ''}`} onClick={() => setActive(!active)}>
                        <span className='l1'></span>
                        <span className='l2'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}