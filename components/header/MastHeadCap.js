



const MastHeadCap = () => (
    <div id='nav-top'>
        <input type='text' placeholder='Search...' />
        <style jsx>{`
            #nav-top {
                position: fixed;
                top: 0;
                background-color: #8D0821;
                width: 100%;
                margin: 0 -999rem;
                padding: 0 999rem;
                height: 4%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
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
                height: 50%;
                margin: 0 30px 0 0;
            }
        `}
        </style>
    </div>
)


export default MastHeadCap