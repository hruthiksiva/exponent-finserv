const BankPartnership = () => {
  const ImgIndex = Array.from({ length: 43 }, (_, i) => i + 1);
  const isMobile = window.innerWidth <= 767; // This condition checks if the screen width is mobile size

  // Slice the list to show only the first 15 items on mobile
  const displayedImages = isMobile ? ImgIndex.slice(0, 15) : ImgIndex;

  return (
    <div className="container p-5">
      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {displayedImages.map((index) => (
          <div className="p-2 col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <img
                  src={`/public/banks/brand-1-${index}.png`}
                  alt={`Bank ${index}`}
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankPartnership;
