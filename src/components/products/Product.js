export default function Product({img,icon}) {
  return (
    <div className="product-container d-flex m-4 border overflow-hidden justify-content-between">
      <div>
        <img src={icon} className="ms-5"/>
      </div>

      <img src={img} className="w-50" />
    </div>
  )
}
