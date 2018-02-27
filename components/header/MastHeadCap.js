



const MastHeadCap = () => (
    <div id="nav-top">
        <a href="/category" className="button">Categories</a>
        <input type="text" placeholder="Search..." />
        <style jsx>{`
            #nav-top {
                position: fixed;
                top: 0;
                background-color: maroon;
                width: 100%;
                margin: 0 -999rem;
                padding: 0 999rem;
                height: 3.5%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            a.button {
                -webkit-appearance: button;
                -moz-appearance: button;
                appearance: button;

                text-decoration: none;
                color: initial;
                margin: 0;
                padding: 0;
            }

            input {
                margin-right: 2%;
            }
        `}
        </style>
    </div>
)


export default MastHeadCap