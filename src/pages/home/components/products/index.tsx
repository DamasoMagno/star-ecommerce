import { SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Product } from "@/components/product";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ButtonsNavigation, Container, Slider } from "./styles";

export function Products() {
  return (
    <Container>
      <Slider
        modules={[Navigation, A11y, Autoplay]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          520: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          720: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <SwiperSlide key={i}>
            <Product />
          </SwiperSlide>
        ))}
      </Slider>

      <ButtonsNavigation>
        <button className="prev">
          <ChevronLeft />
        </button>
        <button className="next">
          <ChevronRight />
        </button>
      </ButtonsNavigation>
    </Container>
  );
}
