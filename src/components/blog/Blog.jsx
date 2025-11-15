import img1 from "../../assets/images/blog/customer-analytics.jpg";
import img2 from "../../assets/images/blog/Credit_Card.jpg";
import img3 from "../../assets/images/blog/RFM.jpg";
import img4 from "../../assets/images/blog/Quantum.jpg";
import img5 from "../../assets/images/blog/Blockchain.jpg";
import img6 from "../../assets/images/blog/preserving.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

// === Real Publications & Insights ===
const blogData = [
  {
    id: 1,
    image: img1,
    date: "Jul 27, 2021",
    comments: 0,
    title: "Customer Segmentation in Python",
    link: "https://medium.com/@ogunbajoadeyinka/customer-segmentation-in-python-b7d01e024002",
  },
  {
    id: 2,
    image: img2,
    date: "Jul 25, 2021",
    comments: 0,
    title: "Credit Card Fraud Detection with Machine Learning in Python",
    link: "https://medium.com/@ogunbajoadeyinka/credit-card-fraud-detection-with-machine-learning-in-python-5323ded33472",
  },
  {
    id: 3,
    image: img3,
    date: "Jul 16, 2021",
    comments: 0,
    title: "Building an RFM Model in Python",
    link: "https://medium.com/@ogunbajoadeyinka/building-an-rfm-model-in-python-3481112a2816",
  },
  {
    id: 4,
    image: img4,
    date: "Jan 30, 2025",
    comments: 0,
    title: "Quantum Computing-Enhanced AI Systems for Business Intelligence",
    link: "https://journalijsra.com/content/quantum-computing-enhanced-ai-systems-advanced-business-intelligence-applications",
  },
  {
    id: 5,
    image: img5,
    date: "Feb 2, 2025",
    comments: 0,
    title:
      "Blockchain-Enabled Smart Contracts and AI in Fintech & Logistics Governance",
    link: "https://journalwjarr.com/sites/default/files/fulltext_pdf/WJARR-2025-0333.pdf",
  },
  {
    id: 6,
    image: img6,
    date: "Feb 10, 2025",
    comments: 0,
    title:
      "Privacy-Preserving AI Models for Decentralized Data in Federated Systems",
    link: "https://gsconlinepress.com/journals/gscarr/content/privacy-preserving-ai-models-decentralized-data-management-federated-information-systems",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          I share insights on Agentic AI, data science, and automation exploring how 
          LLMs, machine learning, and intelligent systems transform decision making across industries.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
