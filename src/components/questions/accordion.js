export default function Accordion({ text }) {
  return (
    <div className="accordion-container d-flex border-bottom py-3 align-items-center">
      <i class="bi bi-chevron-right ms-3"></i>
      <p className="fw-bold m-0">{text}</p>
    </div>
  )
}
