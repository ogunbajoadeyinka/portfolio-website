import Marquee from "react-fast-marquee";

const commonIMGClass =
  "h-6 sm:h-10 md:h-12 transition-transform duration-200 hover:scale-110";

const techStack = [
  { src: "/assets/images/stack/python.svg", alt: "Python", label: "Python – Data Science & AI" },
  { src: "/assets/images/stack/R.svg", alt: "R Language", label: "R – Statistical Modeling" },
  { src: "/assets/images/stack/ms_sql.svg", alt: "SQL", label: "SQL – Data Query & Warehousing" },
  { src: "/assets/images/stack/powerbi.svg", alt: "Power BI", label: "Power BI – Business Intelligence" },
  { src: "/assets/images/stack/tableau.svg", alt: "Tableau", label: "Tableau – Data Visualization" },
  { src: "/assets/images/stack/aws.svg", alt: "AWS", label: "AWS – Cloud Infrastructure" },
  { src: "/assets/images/stack/gcloud.svg", alt: "Google Cloud", label: "Google Cloud – ML & DataOps" },
  { src: "/assets/images/stack/ms_azure.svg", alt: "Azure", label: "Microsoft Azure – Cloud Platform" },
  { src: "/assets/images/stack/pytorch.svg", alt: "Pytorch", label: "Pytorch – Deep Learning Framework" },
  { src: "/assets/images/stack/tensorflow.svg", alt: "Tensorflow", label: "Tensorflow – Deep Learning Framework" },
];

const certs = [
  { src: "/assets/images/certs/googlecloud.png", alt: "Google Cloud Certified", label: "Google Cloud Certified – Professional" },
  { src: "/assets/images/certs/sqlcert.png", alt: "SQL Certification", label: "SQL Certification – Data Analysis" },
  { src: "/assets/images/certs/customeranalytics.png", alt: "Customer Analytics", label: "Wharton Customer Analytics – Coursera" },
  { src: "/assets/images/certs/coursera.svg", alt: "Coursera", label: "Coursera – AI & Data Analytics" },
  { src: "/assets/images/certs/nexford.svg", alt: "Nexford University", label: "MBA in Artificial Intelligence (in progress)" },
];

const TechCertSection = () => {
  return (
    <div className="content py-14 md:py-28 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Tech Stack & Certifications</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          A blend of industry tools, frameworks, and certifications that drive my
          expertise in AI, data analytics, and cloud computing.
        </p>
      </div>

      {/* Line 1 — Tech Stack */}
      <Marquee pauseOnHover={true} speed={90} className="pt-10">
        <div className="flex items-center gap-16 sm:gap-24 md:gap-32">
          {techStack.map((item, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              <img src={item.src} alt={item.alt} className={commonIMGClass} />
              <span className="absolute bottom-[-2.5rem] sm:bottom-[-3rem] text-xs sm:text-sm bg-gray-800 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Line 2 — Certifications (reverse direction) */}
      <Marquee
        pauseOnHover={true}
        speed={80}
        direction="right"
        className="pt-10"
      >
        <div className="flex items-center gap-16 sm:gap-24 md:gap-32">
          {certs.map((item, index) => (
            <div key={index} className="relative group flex flex-col items-center">
              <img src={item.src} alt={item.alt} className={commonIMGClass} />
              <span className="absolute top-[3rem] sm:top-[3.5rem] text-xs sm:text-sm bg-gray-800 text-white px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechCertSection;
