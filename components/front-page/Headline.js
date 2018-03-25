import Link from 'next/link'

const PostLink = ({ post }) => (
  <div>
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
  </div>
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
        
      }

      img { 
        margin: auto;
        display: flex;
        justify-content: center;
        max-width: 99%;
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