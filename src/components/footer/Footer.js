import "./footer.css"
import Input from "./Input"
import CardFooter from "./Card-footer"
export default function Footer() {
  return (
    <div className="footer-container  text-white d-flex flex-column">
      <h1 className="text-center">اطلاعات تماس</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-5">
          <CardFooter
            title="مکان ما"
            info="ایران - تهران"
            icon="bi bi-geo-alt-fill"
          />
          <CardFooter
            title="تلفن و فاکس"
            info="(012) 345 - 6789 یا 555-6578 987"
            icon="bi bi-phone"
          />
          <CardFooter
            title="ایمیل ما"
            info="hnie.ghorbani@gamil.com"
            icon="bi bi-envelope"
          />
        </div>
        <div className="col-lg-5">
          <Input title="نام*" />
          <Input title="ایمیل*" />
          <Input title="تلفن" />
          
          <div className="position-relative">
            <i className="bi bi-chevron-down position-absolute"></i>
            <select className="form-select my-4">
              <option>هدف پیام</option>
              <option>لورم ایپسوم</option>
              <option>لورم ایپسوم</option>
            </select>
          </div>

          <textarea
            rows="5"
            className="input-footer"
            placeholder="پیام..."
          ></textarea>
        </div>
      </div>
      <button className="btn mt-4 align-self-end">ارسال</button>

      <div className="w-100 copy-sec">
        <h6>
          تمامی حقوق برای سایت <span>FARM HOUSE</span> محفوظ است.
        </h6>
        <p>
          طراحی شده توسط <span>حانیه</span>
        </p>
      </div>
    </div>
  )
}
