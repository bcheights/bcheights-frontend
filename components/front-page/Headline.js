import Link from 'next/link'

const PostLink = ({ post }) => (
    <li>
        <Link as={`/${post.year}/${post.month}/${post.day}/${post.slug}`} href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                align-items: center;
                width: auto;
                margin: 0;
                padding: 0 2% 0;
            }

            a {
                text-align: center;
                text-decoration: none;
                margin: 12px 0 0 0;
                color: black;
                text-family: 'Times New Roman';
                font-size: 11pt;
            }

            a:hover {
                color: gray;
            }
        `}
        </style>
    </li>
)


const Headline = () => (
    <div id="container">
        <Link href='/post'><img src='../../static/placeholder.png'></img></Link>
        <p>
            Sample text for headlines....
            This is a test to show extra text
            Hello 
            Hello

        </p>

        <style jsx>{`
            #container {
                border-left-style: solid;
                border-right-style: solid;
                border-width: 1px;
            }

            img { 
                margin: auto;
                display: flex;
                justify-content: center;
                width: 50%;
            }
            
            p {
                margin: auto;
                text-align: center;
                
            }
        `}
        </style>
    </div>
)

export default Headline