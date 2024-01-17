import './sponsor.css'
export default function Sponsor() {
  return (
    <div className="sponsor-contianer row justify-content-center align-items-center">
      <div className="col-6 col-sm-3 col-lg-2"><img src="imgs/sponsor-1.png"/></div>
      <div className="col-6 col-sm-3 col-lg-2"><img src="imgs/sponsor-2.png"/></div>
      <div className="d-none d-sm-block col-3 col-lg-2"><img src="imgs/sponsor-3.png"/></div>
      <div className="d-none d-lg-block col-lg-2"><img src="imgs/sponsor-4.png"/></div>
      <div className="d-none d-lg-block col-lg-2"><img src="imgs/sponsor-1.png"/></div>
    </div>
  )
}
