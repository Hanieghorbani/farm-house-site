import TableBody from "./Table"
import './prices.css'
export default function Prices() {
  return (
    <div className="prices-container row flex-row-reverse mx-lg-5 px-lg-5 mx-0 justify-content-between px-md-3 mx-md-3">
      <div className="col-lg-4 ">
        <table class="table table-hover">
          <thead>
            <tr className="table-dark px-4 ">
              <th scope="col">تولید - محصول </th>
              <th scope="col">قیمت</th>
            </tr>
          </thead>
          <tbody>
            <TableBody name="مارچوبه" price="$ 4.50" />
            <TableBody name="کلم بروکلی" price="$ 3.75" />
            <TableBody name="پیازچه" price="$ 3" />
            <TableBody name="هویج" price="$ 3" />
            <TableBody name="فلفل تند" price="$ 3" />
            <TableBody name="سیب زمینی شیرین" price="$ 2" />
            <TableBody name="کدو سبز" price="$ 1" />
          </tbody>
        </table>
      </div>
      <div className="col-lg-7 d-flex flex-column mt-5 mt-lg-0 ps-xxl-5 mx-xxl-5">
        <h1>لیست قیمت</h1>
        <p className="my-5">
          ما بیش از 50 محصول مختلف و چندین نوع از هر محصول رشد می کنیم. این فقط
          یک لیست جزئی است.
        </p>
        <p>
          این قیمت ها بدون اطلاع قبلی تغییر می کنند. تصاویر نشان داده شده از وب
          سایت کاتالوگ دانه است.
        </p>
        <button className="btn btn-dark mt-5 w-25 w-lg-50 align-self-end">تماس با ما</button>
      </div>
    </div>
  )
}
