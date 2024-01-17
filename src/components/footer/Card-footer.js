export default function CardFooter({ title, info, icon }) {
  return (
    <div className="cardFooter-container d-flex justify-content-between align-items-center px-5 my-4">
      <div>
        <h4>{title}</h4>
        <p className="text-secondary">{info}</p>
      </div>
      <div>
        <i className={icon}></i>
      </div>
    </div>
  )
}
