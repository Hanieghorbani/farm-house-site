import './gallery.css'
import CardGallery from './Card-gallery'
export default function Gallery() {
  return (
    <div className="gallery-container text-white d-flex align-items-center flex-column">
      <h1>گالری محصول</h1>
      <ul className="list-unstyled d-flex justify-content-between align-items-center">
        <li>همه</li>
        <li>سبزیجات </li>
        <li>میوه ها</li>
        <li>تخفیف فصلی</li>
      </ul>
      <div className='d-flex flex-wrap w-75 justify-content-center'>
        <CardGallery img='imgs/gallery-1.png' name='گوجه فرنگیها'/>
        <CardGallery img='imgs/gallery-2.png' name='قارچ'/>
        <CardGallery img='imgs/gallery-3.png' name='کلم بروکلی'/>
        <CardGallery img='imgs/gallery-4.png' name='زنجبیل'/>
        <CardGallery img='imgs/gallery-5.png' name='سیب زمینی'/>
        <CardGallery img='imgs/gallery-6.png' name='تربچه'/>
      </div>
    </div>
  )
}
