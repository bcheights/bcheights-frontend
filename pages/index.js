import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Headline from '../components/front-page/Headline'
import LeftSideBar from '../components/front-page/LeftSideBar'
import RightSideBar from '../components/front-page/RightSideBar'

import Link from 'next/link'

export default () => (
    <body>
        <Header />
        <div id='content'>
            <LeftSideBar />
            <Headline />
            <RightSideBar />
        </div>
        <div id="footer"><Footer /></div>
        <style jsx>{`
            #content {
                margin: 10px 0 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding-bottom: 100px;
            }

            #footer {
                position: absolute;
                height: 100px;
                width: 100%;
                bottom: 0;
                left: 0;
            }
        `}
        </style>
    </body>
)