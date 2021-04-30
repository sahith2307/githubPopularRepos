import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const dataUrl = 'https://apis.ccbp.in/popular-repos?language='

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {loading: true, gotData: [], selectedLanguage: 'ALL'}

  componentDidMount() {
    this.getGithub(languageFiltersData[0].id)
  }

  getGithub = async LanguageName => {
    const response = await fetch(`${dataUrl}${LanguageName}`)
    const data = await response.json()
    const modifiedData = data.popular_repos.map(each => ({
      id: each.id,
      imageUrl: each.avatar_url,
      name: each.name,
      starsCount: each.stars_count,
      forksCount: each.forks_count,
      issuesCount: each.issues_count,
    }))
    this.setState({gotData: modifiedData, loading: false})
  }

  setSelectedLanguage = newId => {
    this.setState({selectedLanguage: newId})
    this.getGithub(newId)
  }

  repositoriesAndLoading = () => {
    const {gotData, loading} = this.state

    if (loading) {
      return (
        <div testid="loader">
          <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
        </div>
      )
    }
    return (
      <ul className="filters-list2">
        {gotData.map(each => (
          <RepositoryItem key={each.id} gotData={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {selectedLanguage} = this.state

    return (
      <div className="bg-cont">
        <div className="github-cont">
          <h1 className="heading">Popular</h1>
          <ul className="filters-list">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                isSelected={each.id === selectedLanguage}
                key={each.id}
                languageFilter={each}
                setSelectedLanguage={this.setSelectedLanguage}
              />
            ))}
          </ul>
          {this.repositoriesAndLoading()}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
