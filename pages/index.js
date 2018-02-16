import Header from '../components/header/Header'
import MastHeadCap from '../components/header/MastHeadCap'

import Link from 'next/link'

export default () => (
    <body>
        <Header />
        <div className="content">
            <p></p>
        </div>
        <style jsx global>{`
            p {
                font-size: 36pt;
                text-align: center;
                margin: 0 auto;
                padding: 0;
            }
        `}
        </style>
    </body>
)