import Navbar from "./Navbar"
import "./header.css"
export default function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <div className="text-white w-100 d-flex justify-content-center flex-column align-items-center h-75 mt-5">
        <h1>
          محصولات <span>ارگانیک</span>
        </h1>
        <h1>مستقیما از مزرعه</h1>
      </div>

      <div className="cloud-bg-section"></div>
    </div>
  )
}
