import bank from '../assets/images/banks/brand-1-1.png'
const BankPartnership = () => {
  const ImgIndex = Array.from({length:43},( _,i)=>i+1);
  return (
    
    <div className="container p-5">
      <div className="row">
      {ImgIndex.map((index) => (
        <div className="p-2 col-lg-1-5" key={index}>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <img
                 src={`/public/banks/brand-1-${index}.png`}
                alt={`Bank ${index}`}
                className='img-fluid'
                style={{ maxWidth: "100%", height: "auto" }}
              />

            </div>
          </div>
      </div>
        ))}
      </div>
    </div>
    
    
  )
}

export default BankPartnership