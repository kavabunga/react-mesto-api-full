export default function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_preview ${card && 'popup_opened'}`}>
      <div className="popup__preview-container">
        <img src={card && card.link} alt={card && card.name} className="popup__image" />
        <h2 className="popup__caption">{card && card.name}</h2>
        <button type="button" className="popup__close-button" onClick={onClose}/>
      </div>
    </div>
  )
}
