import './about.css'
export default function About() {
  return (
    <div className="about-container row align-items-center mx-lg-5 px-5">
      <div className="col-12 col-lg-6">
        <img src="imgs/about-right.png" className='img-fluid'/>
      </div>
      <div className="col-12 col-lg-6 d-flex flex-column my-5 my-lg-0">
        <h1 className='fw-bolder'>درباره ما</h1>
        <p className='fw-bolder my-4 fs-5'>
          ما چیزهای زیادی برای شما داریم اما به طور کلی، برنامه مزرعه ای که ما
          در سال 2014 ایجاد کردیم، باقی خواهد ماند.
        </p>

        <ul className='fw-bolder list-unstyled'>
          <li className='mb-3'> <span>1</span>دوشنبه تا جمعه: 4-6 ایران  تهران</li>
          <li> <span>2</span>شنبه -شنبه: ساعت 8 صبح تا 1 بعد، مرکز شهر ویندزور</li>
        </ul>

        <button className='w-50 w-lg-25 mx-auto btn'>تماس با ما</button>
      </div>
    </div>
  )
}
