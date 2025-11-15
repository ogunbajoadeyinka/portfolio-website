import Projects from "./Projects";
import Legal from "../../assets/images/portfolio-images/Legal.JPG";
import GFiber from "../../assets/images/portfolio-images/GFiber.JPG";
import Hacker from "../../assets/images/portfolio-images/Hacker.JPG";
import CSegmentation from "../../assets/images/portfolio-images/CSegmentation.JPG";
import quality_assurance from "../../assets/images/portfolio-images/quality_assurance.JPG";
import Customer24_7 from "../../assets/images/portfolio-images/Customer24_7.JPG";

const projectData = [
  {
    id: 1,
    image: Legal, 
    category: "AI · NLP · Automation",
    title: "Legal Document Review Assistant",
    description:
      "An AI-powered system that scans legal documents, extracts key clauses, summarizes risks, and accelerates contract review.",
    link: "https://github.com/ogunbajoadeyinka/LegalReview-AI",
  },
  {
    id: 2,
    image: GFiber,
    category: "Data Analytics · Strategy",
    title: "Google Fiber Market Expansion Analytics",
    description:
      "Used broadband, census, and demographic datasets to identify high-opportunity U.S. communities for Google Fiber expansion.",
    link: "#!",
  },
  {
    id: 3,
    image: Hacker,
    category: "Machine Learning",
    title: "Credit Card Fraud Detection",
    description:
      "Developed ML models (XGBoost / Isolation Forest) to detect anomalous transactions with high accuracy and low false positives.",
    link: "https://github.com/ogunbajoadeyinka/Credit_Card",
  },
  {
    id: 4,
    image: CSegmentation,
    category: "Customer Analytics",
    title: "Customer Segmentation & RFM Analysis",
    description:
      "Built RFM and clustering models in Python to segment customers and improve targeted marketing strategies.",
    link: "https://github.com/ogunbajoadeyinka/Customer-Analytics-in-Python-",
  },
  {
    id: 5,
    image: quality_assurance,
    category: "Automation & Data Analytics",
    title: "QA Analytics Automation with Power Platform",
    description:
     "Built an end-to-end Power Platform system (Power BI, Power Apps, Power Automate) to automate QA incident reporting, increase data accuracy, and streamline operational workflows.",
    link: "#!",
  },
  {
    id: 6,
    image: Customer24_7,
    category: "AI · Customer Support",
    title: "24/7 AI Customer Service Chatbot",
    description:
      "Developed a conversational AI chatbot that handles customer queries, automates responses, and reduces service load.",
    link: "https://github.com/ogunbajoadeyinka/CustomerSupport",
  },
];


const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
          Here’s a selection of my AI, ML, and data analytics projects.
          These are only a portion of my work several others are protected under NDA.
          </p>

        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/ogunbajoadeyinka?tab=repositories"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
