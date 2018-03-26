



function getDate(dateString) {
  var d = new Date(dateString)
  return '- ' + d.toLocaleDateString('en-us', {month: 'long'}) 
         + ' ' + d.getDay() + ', ' + d.getFullYear()
}

const Summary = ({title, featured, author, date, excerpt}) => {
  return (
    <div id="article">
      <div id="headline">
        <img src={featured} />
        <h2>{title}</h2>
        <div id="details">
          <p>{author}</p>
          <p>{getDate(date)}</p>
        </div>
        
      </div>
      <div id="content" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  )
}

export default Summary