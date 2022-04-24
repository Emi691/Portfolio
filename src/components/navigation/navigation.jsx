import './navigation.scss'

export default function Navigation(props) {
    return (
        <div className='nav'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>e</a>
                </div>
                <div className='right'>
                    right
                </div>
            </div>
        </div>
    );
}