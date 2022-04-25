import './navigation.scss'

export default function Navigation(props) {
    return (
        <div className='nav'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>e</a>
                </div>
                <div className='right'>
                    <div className='dropdown active'>
                        <span className='l1'></span>
                        <span className='l2'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}