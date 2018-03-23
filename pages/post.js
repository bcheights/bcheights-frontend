import Header from '../components/header/Header'

const axios = require('axios')


class Post extends React.Component {

  constructor(props) {
    super(props)

    //console.log(props.url.query.slug)
    const url = 'http://18.219.114.43/wp-json/wp/v2/posts/22'

    axios.get(url)
      .then(response => {
        const data = response.data
        
        const mediaURL =
          'http://18.219.114.43/wp-json/wp/v2/media/' + data.featured_media
        const authorURL =
          'http://18.219.114.43/wp-json/wp/v2/users/' + data.author

        // GET Featured Media 
        axios.get(mediaURL)
          .then(response => {
            const media = response.data
            this.setState({ featured: media.description.rendered })
          })
          .catch(function (error) {
            console.log(error)
          })

        // GET Author Name
        axios.get(authorURL)
          .then(response => {
            const author = response.data
            this.setState({ author: author.name })
          })
          .catch(function (error) {
            console.log(error)
          })
        
        // Set new state to update the content of the post
        this.setState({ content: data.content.rendered })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    if (this.state !== null) {
      return (
        <div id="body">
          <Header />
          <div id="content">
            <div id="featured" key={this.state.featured} dangerouslySetInnerHTML={{ __html: this.state.featured }} />
            <div key={this.state.author} dangerouslySetInnerHTML={{ __html: this.state.author }} />
            <div key={this.state.content} dangerouslySetInnerHTML={{ __html: this.state.content }} />
          </div>
          <style jsx>{`
            #content {
              display: flex;
              flex-flow: column wrap;
              justify-content: center;
              align-items: center;
              width: 50%;
              margin: 0 auto;
            }

            #featured img {
              width: 100%;
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