import MastHead from './MastHead'
import Link from 'next/link'


const Header = () => (
    <div className="container">
        <MastHead />
        <ul>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/news'>
                <a>News</a>
            </Link>
            <Link href='/sports'>
                <a>Sports</a>
            </Link>
        </ul>
        <style jsx>{`
            ul {
                text-align: center;
                margin: 10px;
            }
        `}
        </style>
    </div>
)

export default Header