// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {gotData} = props

  return (
    <li className="big-cont">
      <img className="image" src={gotData.imageUrl} alt={gotData.name} />
      <h1 className="name">{gotData.name}</h1>
      <div className="sub-cont">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p className="text">{gotData.starsCount} stars</p>
      </div>
      <div className="sub-cont">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p className="text">{gotData.forksCount} forks</p>
      </div>
      <div className="sub-cont">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open-issues"
        />
        <p className="text">{gotData.issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
