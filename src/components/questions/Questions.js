import "./questions.css"
import Accordion from "./accordion"
export default function Questions() {
  return (
    <div className="questions-container row  mx-md-3 px-md-3 mx-lg-5 px-lg-5">
      <div className="col-lg-6">
        <img src="imgs/faq-right.png" className='img-fluid'/>
      </div>
      <div className="col-lg-6 d-flex justify-content-center flex-column align-items-end">
        <h1>سوالات</h1>
        <div>
          <Accordion text="کدام نوع محصول را می توانید انتظار داشته باشید؟" />
          <Accordion text="چگونه برای خانه مزرعه پرداخت می کنید؟" />
          <Accordion text="فصل چقدر طول می کشد؟" />
          <Accordion text="کدام نوع محصول را می توانید انتظار داشته باشید؟" />
          <Accordion text="چقدر تجربه ای دارید؟" />
        </div>
      </div>
    </div>
  )
}
