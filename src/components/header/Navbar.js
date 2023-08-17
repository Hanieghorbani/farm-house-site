export default function Navbar() {
  return (
    <div className="navbar-container text-white d-flex position-relative align-items-center">
      <ul className="d-none d-lg-flex justify-content-between align-items-center my-3">
        <li>خانه</li>
        <li>محصولات</li>
        <li>آلبوم عکس</li>
        <li>مشتریان</li>
        <li>سوالات متداول</li>
        <li className="icon-navbar">
          <a href="#">
            <i className="bi bi-pencil-square"></i>
          </a>
        </li>
      </ul>
      <i className="bi bi-list fs-1 d-lg-none"></i>
      <img src="imgs/logo.png" className="" />
    </div>
  )
}
