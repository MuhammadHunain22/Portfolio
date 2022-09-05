import './ImgCard.css'
import './cardsdata'

export const ImgCard = (props) => {
  return (
    <div className="imgcard">
    <div className="card_image"> <img src={props.imgsrc}/> 
    </div>
  </div>
  )
}

