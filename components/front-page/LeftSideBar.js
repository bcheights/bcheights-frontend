


const LeftSideBar = () => (
    <div id="content">
        <img src='../../static/placeholder.png'></img>
        <p>Top Story!!! Woohoo!!!</p>
        <style jsx>{`
            img {
                width: 80%;
            }

            #content {
                width: 10%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            p {
                text-align: center;
                margin: 0;
                padding: 0;
            }
        `}
        </style>
    </div>
)

export default LeftSideBar