import './navigation.scss'

export default function Navigation(props) {
    return (
        <div className='nav'>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro'>Click me!</a>
                </div>
                <div className='right'>
                    right
                </div>
            </div>
        </div>
    );
}