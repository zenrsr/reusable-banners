/* eslint-disable react/button-has-type */
import './index.css'

const BannerCard = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="banner-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="banner-button">Show More</button>
      </div>
    </li>
  )
}
export default BannerCard
