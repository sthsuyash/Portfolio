import Icon from './Icon';
import {
    InfoData,
    QualificationData,
    SkillsData
} from './data';

const AboutSection: React.FC = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <h2 className='section-title'>About Me</h2>
                <p>
                    I am a software engineer with a passion for building scalable
                    web applications and solving complex problems. I have experience
                    working with JavaScript, TypeScript, React, Redux, Node.js,
                    Express, MongoDB, SQL, and Python.
                </p>
                <ul>
                    {InfoData.map((item, index) => (
                        <li key={index}>
                            <Icon name={item.icon} size={24} />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutSection;
