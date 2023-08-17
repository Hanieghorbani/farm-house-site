import Product from "./Product"
import './product.css'
export default function Products() {
  return (
    <div className="products-container d-flex justify-content-center flex-column align-items-center mt-5">
      <h1>آخرین محصولات</h1>
      <p className="fw-bold mx-3 mx-lg-0 text-center">به طور مستقیم از مزرعه، تازه رشد کرده برای مشتریان ما.</p>

      <div className="row justify-content-center">
       <div className="col-lg-6"><Product /></div>
       <div className="col-lg-6"><Product /></div>
       <div className="col-lg-6"><Product /></div>
       <div className="col-lg-6"><Product /></div>
      </div>
    </div>
  )
}
