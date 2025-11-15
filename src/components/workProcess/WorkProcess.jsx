import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "Data Collection & Exploration",
    description:
      "Every project starts with data  collecting, cleaning, and understanding complex structured and unstructured datasets. I apply statistical and exploratory data analysis to uncover relationships that drive meaningful insights.",
    svgPath:
      "M21.3333 18.6667H10.6667C10.313 18.6667 9.97391 18.8072 9.72386 19.0573C9.47381 19.3073 9.33333 19.6465 9.33333 20.0001C9.33333 20.3537 9.47381 20.6928 9.72386 20.9429C9.97391 21.1929 10.313 21.3334 10.6667 21.3334H21.3333C21.687 21.3334 22.0261 21.1929 22.2761 20.9429C22.5262 20.6928 22.6667 20.3537 22.6667 20.0001Z",
  },
  {
    id: 2,
    title: "Model Design & Development",
    description:
      "I develop robust AI and ML systems using frameworks such as TensorFlow, PyTorch, and XGBoost  including advanced LLMs and multi-agent architectures for automation and intelligence-driven decision systems.",
    svgPath:
      "M9.33333 21.3334C9.86377 21.3334 10.3725 21.1227 10.7475 20.7476C11.1226 20.3726 11.3333 19.8638 11.3333 19.3334L15.0533 15.4134H15.36H15.6667L17.8133 17.5601C17.8133 18.1972 18.024 18.7059 18.3991 19.081C18.7742 19.456 19.2829 19.6667 19.8133 19.6667Z",
  },
  {
    id: 3,
    title: "Automation & Integration",
    description:
      "I bridge AI models with low-code business automation tools like Microsoft Power Apps and Power Automate  integrating intelligent systems into real-time workflows and decision pipelines for end-users.",
    svgPath:
      "M29.3333 9.65319C29.3343 9.47772 29.3007 9.30377 29.2343 9.14132C29.168 8.97887 29.0702 8.83111 28.9466 8.70653L23.2933 3.05319C23.1687 2.92962 23.021 2.83185 22.8585 2.7655C22.6961 2.69915 22.5221 2.66551 22.3466 2.66653Z",
  },
  {
    id: 4,
    title: "Deployment, Monitoring & Impact",
    description:
      "I deploy models on AWS, Azure, and GCP using cloud-native services and CI/CD pipelines, ensuring scalability and observability. Each deployment is evaluated based on real-world impact, performance, and sustainability.",
    svgPath:
      "M28 18.6668H26.6666V9.3335C26.6666 8.27263 26.2452 7.25521 25.4951 6.50507C24.7449 5.75492 23.7275 5.3335 22.6666 5.3335H9.33329C8.27243 5.3335 7.25501 5.75492 6.50487 6.50507C5.75472 7.25521 5.33329 8.27263 5.33329 9.3335V18.6668H3.99996C3.64634 18.6668 3.3072 18.8073 3.05715 19.0574C2.8071 19.3074 2.66663 19.6465 2.66663 20.0002V22.6668C2.66663 23.7277 3.08805 24.7451 3.8382 25.4953C4.58834 26.2454 5.60576 26.6668 6.66663 26.6668H25.3333C26.3942 26.6668 27.4116 26.2454 28.1617 25.4953C28.9119 24.7451 29.3333 23.7277 29.3333 22.6668Z",
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Work Process</p>

        <p className="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          My workflow combines data science, AI, and automation engineering to
          transform raw data into actionable intelligence and business impact.
        </p>

        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Each phase  from exploration and model design to deployment and
          monitoring  follows a structured, iterative process focused on
          reliability, scalability, and measurable outcomes.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
