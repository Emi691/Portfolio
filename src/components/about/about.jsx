import './about.scss'
import FaceIcon from '@mui/icons-material/Face';

export default function About() {
    return (
        <div className='about' id="about">
            <img src="assets/me.jpg" alt={FaceIcon}/>
        </div>
    );
}