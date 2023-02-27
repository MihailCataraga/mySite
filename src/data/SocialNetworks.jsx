import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const sites = [
    {
        name: 'Facebook',
        icon: <BsFacebook className='icon facebook' />,
        link: "https://www.facebook.com/mihai.cataraga.1"
    },
    {
        name: 'Instagram',
        icon: <BsInstagram className='icon instagram' />,
        link: 'https://www.instagram.com/mihai.0/'
    },
    {
        name: 'Twitter',
        icon: <BsTwitter className='icon twitter' />,
        link: 'https://twitter.com/MihaiCataraga1'
    },
    {
        name: 'Linkedin',
        icon: <BsLinkedin className='icon linkedin' />,
        link: 'https://www.linkedin.com/in/mihai-cataraga-69a892226/'
    },
    {
        name: 'Github',
        icon: <BsGithub className='icon github' />,
        link: 'https://github.com/MihailCataraga'
    },
]

export default sites;