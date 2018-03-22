


const RightSideBar = () => (
    <div id="content">
        <img src='../../static/placeholder.png'></img>
        <p>Magazine Stuff!!! Woohoo!!!</p>
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
                align-items: center;
                margin: 0;
                padding: 0;
            }
        `}
        </style>
    </div>
)

export default RightSideBar