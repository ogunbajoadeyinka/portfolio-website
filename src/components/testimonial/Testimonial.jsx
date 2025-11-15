import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Adeyinka’s expertise in AI engineering and data science transformed how our systems handle intelligence and automation.",
    quote: `His ability to translate complex problems into scalable, cloud-deployed ML solutions was remarkable. 
    The agentic AI framework he helped develop at Nabafat.AI reduced deployment time by 30% and improved efficiency by over 40%.`,
    name: "Dr. Bashir Mohammed",
    designation: "Senior Gen AI Architect, AWS",
  },
  {
    message:
      "A true leader in applied data science—Adeyinka blends technical excellence with mentorship and collaboration.",
    quote: `During our collaboration at British American Tobacco, his ML pipeline for DNS threat analytics achieved 95% accuracy on 100M+ records. 
    Beyond results, his mentorship and structured approach uplifted the entire data team.`,
    name: "Olivia Bennett",
    designation: "Senior Data Manager, British American Tobacco",
  },
  {
    message:
      "An inspiring educator and innovator whose impact extends beyond engineering to leadership and capacity building.",
    quote: `Adeyinka trained over 3,000 professional across Nigeria through the AI+ initiative, demonstrating his commitment 
    to democratizing artificial intelligence and fostering the next generation of innovators.`,
    name: "Dr. Kehinde Adewumi",
    designation: "Program Director, AI+ Africa",
  },
];


const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
