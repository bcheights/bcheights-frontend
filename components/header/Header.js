import Link from 'next/link'


const Header = () => (
    <div className="masthead">
        <h1>The Heights</h1>
        <ul>
            <li>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href='/news'>
                    <a>News</a>
                </Link>
            </li>
            <li>
                <Link href='/sports'>
                    <a>Sports</a>
                </Link>
            </li>
            <li>
                <Link href='/arts'>
                    <a>Arts</a>
                </Link>
            </li>
            <li>
                <Link href='/opinions'>
                    <a>Opinions</a>
                </Link>
            </li>
            <li>
                <Link href='/metro'>
                    <a>Metro</a>
                </Link>
            </li>
            <li>
                <Link href='/features'>
                    <a>Features</a>
                </Link>
            </li>
            <li>
                <Link href='/magazine'>
                    <a>Magazine</a>
                </Link>
            </li>
            <li>
                <Link href='/more'>
                    <a>More</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            h1 {
                text-align: center;
                font-family: "Times New Roman";
                border-bottom-style: solid;
                padding: 1%;
            }

            ul {
                height: 10px;
                list-style-type: none;
                text-align: center;
            }

            li {
                display: inline;
            }
            
            a {
                display: inline-block;
                text-decoration: none;
                padding: 0.5%;
                color: black;
                text-family: "Times New Roman";
            }

            a:hover {
                color: gray;
            }
        `}
        </style>
    </div>
)

export default Header