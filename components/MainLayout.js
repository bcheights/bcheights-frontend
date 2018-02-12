import Header from './header/Header'

const Layout = (props) => (
    <div className="shell">
        <Header />
        <style jsx>{`
            .shell {
                max-width: 70%;
                position: relative;
                left: 15%;
            }
        `}
        </style>
    </div>
    
    
)

export default Layout