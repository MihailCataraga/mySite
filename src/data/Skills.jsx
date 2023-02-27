import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNode, FaNpm, FaGithub, FaPython } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiMaterialui, SiJquery } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const mainSkills = [
    {
        logo: <FaHtml5 className='icon html' />,
        name: 'HTML'
    },
    {
        logo: <FaCss3Alt className='icon css' />,
        name: 'CSS'
    },
    {
        logo: <BsBootstrapFill className='icon bootstrap' />,
        name: 'Bootstrap'
    },
    {
        logo: <FaSass className='icon sass' />,
        name: 'Sass'
    },
    {
        logo: <DiJavascript1 className='icon javascript' />,
        name: 'JavaScript'
    },
    {
        logo: <FaReact className='icon react' />,
        name: 'React'
    },
    {
        logo: <SiRedux className='icon redux' />,
        name: 'Redux'
    },
]

export const allSkills = [
    {
        logo: <FaHtml5 className='icon html' />,
        name: 'HTML',
        lvl:  '90',
    },
    {
        logo: <FaCss3Alt className='icon css' />,
        name: 'CSS',
        lvl:  '80',
    },
    {
        logo: <BsBootstrapFill className='icon bootstrap' />,
        name: 'Bootstrap',
        lvl:  '75',
    },
    {
        logo: <FaSass className='icon sass' />,
        name: 'Sass',
        lvl:  '60',
    },
    {
        logo: <SiMaterialui className='icon materialUI' />,
        name: 'MaterialUI',
        lvl:  '50',
    },
    {
        logo: <DiJavascript1 className='icon javascript' />,
        name: 'JavaScript',
        lvl:  '75',
    },
    {
        logo: <SiJquery className='icon jQuery' />,
        name: 'JQuery',
        lvl:  '50',
    },
    {
        logo: <VscJson className='icon json' />,
        name: 'JSON',
        lvl:  '80',
    },
    {
        logo: <FaReact className='icon react' />,
        name: 'React',
        lvl:  '75',
    },
    {
        logo: <SiRedux className='icon redux' />,
        name: 'Redux',
        lvl:  '40',
    },
    {
        logo: <FaNode className='icon node' />,
        name: 'Node',
        lvl:  '25',
    },
    {
        logo: <FaNpm className='icon npm' />,
        name: 'Npm',
        lvl:  '30',
    },
    {
        logo: <FaGithub className='icon gitHub' />,
        name: 'GitHub',
        lvl:  '50',
    },
    {
        logo: <FaPython className='icon python' />,
        name: 'Python',
        lvl:  '25',
    },
] 

export default mainSkills;