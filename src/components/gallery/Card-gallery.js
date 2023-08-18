export default function CardGallery({ img, name }) {
  return (
    <div className="cardGallery-container d-flex justify-content-center flex-column align-items-center m-4">
      <div className="bg-white">
        <img src={img} />
      </div>
      <h5 className="mt-3">{name}</h5>
    </div>
  )
}
