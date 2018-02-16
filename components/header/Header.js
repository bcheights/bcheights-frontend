import MastHeadCap from '../header/MastHeadCap'

import Link from 'next/link'

function getSections() {
    return [
        { id: 'news', title: 'News' },
        { id: 'sports', title: 'Sports' },
        { id: 'arts', title: 'Arts' },
        { id: 'opinions', title: 'Opinions' },
        { id: 'metro', title: 'Metro' },
        { id: 'features', title: 'Features' },
    ]
}

const SectionLink = ({ section }) => (
    <li>
        <Link as={`/section/${section.id}`} href={`/section?title=${section.id}`}>
            <a>{section.title}</a>
        </Link>
        <style jsx>{`
            li {
                display: inline-block;
                width: auto;
                margin: 0;
                padding: 0 2% 0;
            }

            a {
                text-align: center;
                text-decoration: none;
                margin: 12px 0 0 0;
                display: block;
                color: black;
                text-family: "Times New Roman";
                font-size: 13pt;
            }

            a:hover {
                color: gray;
            }
        `}
        </style>
    </li>
)


const Header = () => (
    <div className="header">
        <h1 id="masthead">
            <Link href="/"><a>The Heights</a></Link>
        </h1>
        <ul id="masthead-nav">
            <li><Link href='/'><a>Home</a></Link></li>
            {getSections().map((section) => (
                <SectionLink key={section.id} section={section}/>
            ))}
            <li><Link href='/magazine'><a>Magazine</a></Link></li>
            <li><Link href='/more'><a>More</a></Link></li>
        </ul>
        <style jsx>{`
            #masthead {
                border-bottom-style: solid;
                text-align: center;
                margin: 0 auto;
                padding: 10px 0;
            }

            #masthead a {
                text-align: center;
                text-decoration: none;
                text-family: "Times New Roman";
                color: black;
                margin: 0;
            }

            img {
                margin: auto;
                display: block;
                max-width: 100%;
                width: auto\9;
                height: auto;
            }

            #masthead-nav {
                width: 100%;
                margin: 0 auto;
                padding: 0;
                list-style-type: none;
                text-align: center;
            }

            #masthead-nav li {
                display: inline-block;
                width: auto;
                margin: 0;
                padding: 0 2% 0;
            }
            
            #masthead-nav a {
                text-align: center;
                text-decoration: none;
                margin: 12px 0 0 0;
                display: block;
                color: black;
                text-family: "Times New Roman";
                font-size: 13pt;
            }

            #masthead-nav a:hover {
                color: gray;
            }
        `}
        </style>
    </div>
)

export default Header