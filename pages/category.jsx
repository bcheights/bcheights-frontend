import Header from '../components/header/Header'
import MastHeadCap from '../components/header/MastHeadCap'

import Link from 'next/link'
import Head from 'next/head'
import { Component } from "react"
import { connect } from 'react-redux'


class Category extends Component {
  static getInitialProps({ store, isServer, req, query }) {
    const id = req.params.id ? req.params.id : query.id
    
    // Capitalize the first letter of id 
    const category = id.charAt(0).toUpperCase() + id.slice(1)
    return {category}
  }

  render() {
    const { category } = this.props
    return (
      <div>
        <Head> 
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          
          {/* Bootstrap stylesheet link */}
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          
          <title>{`${category} - The Heights`}</title>
        </Head>
        <Header />
        <div className='content'>
          <h1>{category}</h1>
          <p>ITS CHANGeED</p>
        </div>
        <style jsx>{`
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
        </style>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      </div>
    )
  }
}

export default connect()(Category)
