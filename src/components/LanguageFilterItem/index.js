// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isSelected, languageFilter, setSelectedLanguage} = props
  const ClassName = isSelected ? 'language selected' : 'language'

  const onClickBtnLanguageFilter = () => {
    setSelectedLanguage(languageFilter.id)
  }

  return (
    <li>
      <button
        className={ClassName}
        onClick={onClickBtnLanguageFilter}
        type="button"
      >
        {languageFilter.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
