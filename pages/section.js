import Header from '../components/header/Header'
import MastHeadCap from '../components/header/MastHeadCap'

import Link from 'next/link'

export default (props) => (
    <body>
        <Header />
        <div className="content">
            <h1>{props.url.query.title}</h1>
            <p>ITS CHANGED</p>
        </div>
        <style jsx global>{`
        `}
        </style>
    </body>
)