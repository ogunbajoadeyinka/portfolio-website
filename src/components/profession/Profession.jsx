import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "AI & Machine Learning Engineering",
    description:
      "I design and deploy scalable machine learning and deep learning systems, including LLM-powered and agentic AI architectures for automation, intelligence, and decision-support.",
  },
  {
    id: 2,
    title: "Data Science & Predictive Analytics",
    description:
      "I build end-to-end data solutions — from exploration and feature engineering to model development and evaluation — delivering insights and measurable business impact across industries.",
  },
  {
    id: 3,
    title: "Cloud & MLOps Automation",
    description:
      "I deploy AI systems on AWS, Azure, and GCP with CI/CD pipelines, monitoring, and automated workflows, ensuring reliability, scalability, and production-readiness.",
  },
  {
    id: 4,
    title: "Low-Code Intelligent Automation",
    description:
      "I integrate AI with Power Apps, Power Automate, and enterprise systems, enabling rapid workflow automation and AI-powered decision processes across business functions.",
  },
];


const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
      <p className="section-title max-md:text-center">What I do</p>
      <div className="mt-6 text-[14px]">
        <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
          I build intelligent and scalable data-driven systems  combining machine learning, 
          agentic AI, and cloud automation to solve complex problems with measurable impact.
        </p>
        <p className="text-xs sm:text-lg font-normal text-gray-400">
          My work spans AI engineering, predictive analytics, workflow automation, and 
          enterprise cloud deployment across cybersecurity, finance, healthcare, FMCG, and energy.
        </p>
      </div>

        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Let’s Build Together
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
