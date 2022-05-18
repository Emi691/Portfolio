import './about.scss'
import FaceIcon from '@mui/icons-material/Face';

export default function About() {
    return (
        <div className='about' id="about">
            <div className="image">
                <img src="assets/me.jpg" alt={FaceIcon}/>
            </div>
            <div className="me">
                <p>I am a spunky, inquisitive software engineer. I code in Ruby and JavaScript, frequently within with Rails and React.
                 I blend strong analytical and problem-solving skills from my background in chemistry with software engineering aptitude to write clean, efficient code.
                 When I am not at my desk, you can find me climbing at the crag, sewing a new item for my wardrobe, or baking up delicous treats. 
                 </p>
            </div>
            
        </div>
    );
}