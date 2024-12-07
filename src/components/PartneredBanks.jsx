import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";

const PartnerBanks = () => {
  const slides = [
    "../assets/images/banks/brand-1-1.png",
    "../assets/images/banks/brand-1-3.png",
    "../assets/images/banks/brand-1-5.png",
    "../assets/images/banks/brand-1-9.png",
    "../assets/images/banks/brand-1-11.png",
    "../assets/images/banks/brand-1-13.png",
    "../assets/images/banks/brand-1-15.png",
    "../assets/images/banks/brand-1-19.png",
    "../assets/images/banks/brand-1-21.png",
  ];

  const reverseSlides = [
    "../assets/images/banks/brand-1-2.png",
    "../assets/images/banks/brand-1-4.png",
    "../assets/images/banks/brand-1-6.png",
    "../assets/images/banks/brand-1-8.png",
    "../assets/images/banks/brand-1-10.png",
    "../assets/images/banks/brand-1-14.png",
    "../assets/images/banks/brand-1-16.png",
    "../assets/images/banks/brand-1-20.png",
    "../assets/images/banks/brand-1-24.png",
  ];

  const SwiperCarousel = ({ images, reverse = false }) => (
    <Swiper
      spaceBetween={15}
      slidesPerView={5}
      autoplay={{ delay: 800, reverseDirection: reverse }}
      breakpoints={{
        0: { slidesPerView: 4, spaceBetween: 5 },
        375: { slidesPerView: 4, spaceBetween: 5 },
        575: { slidesPerView: 4, spaceBetween: 5 },
        767: { slidesPerView: 3, spaceBetween: 15 },
        991: { slidesPerView: 4, spaceBetween: 15 },
        1199: { slidesPerView: 7, spaceBetween: 0 },
      }}
      modules={[Autoplay]}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Brand ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="block-title text-left">
            <p>Get to Know About</p>
            <h2>Our Partner Banks</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="client-carousel pt-40 pb-40 client-carousel__has-border-top">
          <SwiperCarousel images={slides} />
        </div>
        <div className="client-carousel pt-40 pb-40 client-carousel__has-border-top">
          <SwiperCarousel images={reverseSlides} reverse />
        </div>
      </div>
    </div>
  );
};

export default PartnerBanks;
