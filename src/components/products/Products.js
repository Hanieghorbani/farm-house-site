import Product from "./Product"
import './product.css'
export default function Products() {
  return (
    <div className="products-container d-flex justify-content-center flex-column align-items-center mt-5">
      <h1>آخرین محصولات</h1>
      <p className="fw-bold mx-3 mx-lg-0 text-center">به طور مستقیم از مزرعه، تازه رشد کرده برای مشتریان ما.</p>

      <div className="row justify-content-center">
       <div className="col-lg-6"><Product img='imgs/product-1.png' icon='imgs/pro-icon-1.png'/></div>
       <div className="col-lg-6"><Product img='imgs/product-2.png' icon='imgs/pro-icon-2.png'/></div>
       <div className="col-lg-6"><Product img='imgs/product-3.png' icon='imgs/pro-icon-3.png'/></div>
       <div className="col-lg-6"><Product img='imgs/product-4.png' icon='imgs/pro-icon-4.png'/></div>
      </div>
    </div>
  )
}
