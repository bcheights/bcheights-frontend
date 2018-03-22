import Header from '../components/header/Header'

const http = require('http')

function getPost() {
    
}



class Post extends React.Component {

    constructor(props) {
        super(props)

        const url = 'http://18.219.114.43/wp-json/wp/v2/posts/14'

        http.get(url, res => {
            res.setEncoding("utf8")
            let body = ""
            res.on("data", data => {
                body += data
            })
            res.on("end", () => {
                body = JSON.parse(body)
                this.setState({content: body.content.rendered })
            })
        })

        const url2 = ''
    }

    render() {
        if (this.state !== null) {
            return (
                <div id="body">
                    <Header />
                    <div id="content">
                        <div key={this.state.content} id="wp" dangerouslySetInnerHTML={{__html: this.state.content }} />
                    </div>
                    <style jsx>{`
                        #content {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
    
                        #wp {
                            height: 500px;
                        }
                    `}
                    </style>
                </div>
            )
        }
        else {
            return (
                <div id="body">
                    <Header />
                    <style jsx>{`
                    `}
                    </style>
                </div>
            )
        }
        
    }
}

export default Post