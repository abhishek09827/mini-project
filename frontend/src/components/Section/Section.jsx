import { motion } from "framer-motion";

const Section = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center pl-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          ></motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className="h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Set Up
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-[#939aff]">
              Integrate intelligence into workflow.
            </p>
            With Intelligent Insights, business can analyse their internet
            presence in minutes.
          </h3>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center w-10/12 mx-auto">
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg w-full mb-8">
          <div className="text-[#7d8590] mb-4">
            <div className="font-medium">how to set up</div>
            <span className="text-[12px] f6">init: start</span>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-full md:gap-10"
          >
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div className="p-6 md:mt-8 mb-10 bg-opacity-20 bg-blue-100 rounded-md shadow-md">
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        height="24"
                        fill="#3fb950"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        className="octicon octicon-check-circle-fill color-fg-success mr-2"
                      >
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      <span className="font-medium text-white">Register</span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">1m 21s</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="absolute md:top-12 lg:left-[47%] md:left-[46%] max-md:top-[88px] z-[1] flex items-center max-md:rotate-90"
            >
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
              <div
                style={{ width: "37px", height: "2px", background: "#D1D5DA" }}
              ></div>
              <div
                className="inline-block rounded-full p-1 bg-[#6e7681]"
                style={{ boxShadow: "0 0 0 2px #444D56" }}
              ></div>
            </motion.div>
            <motion.div
              variants={item}
              transition={{ type: "tween" }}
              className="animate w-full"
            >
              <div className="pt-2 pb-1 px-6 text-[15px] rounded-t-md inline-block font-medium text-white bg-opacity-20 bg-blue-100">
                Steps
              </div>
              <div className="p-6 mb-10 bg-opacity-20 bg-blue-100 rounded-tl-none rounded-md shadow-md">
                <ul className="-mb-6">
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        height="24"
                        fill="#3fb950"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        className="octicon octicon-check-circle-fill color-fg-success mr-2"
                      >
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      <span className="font-medium text-white">
                        Connect your socials
                      </span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">4s</span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        height="24"
                        fill="#3fb950"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        className="octicon octicon-check-circle-fill color-fg-success mr-2"
                      >
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      <span className="font-medium text-white">
                        Database Config
                      </span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">3m 17s</span>
                  </li>
                  <li className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        height="24"
                        fill="#3fb950"
                        viewBox="0 0 24 24"
                        version="1.1"
                        width="24"
                        data-view-component="true"
                        className="octicon octicon-check-circle-fill color-fg-success mr-2"
                      >
                        <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path>
                      </svg>
                      <span className="font-medium text-white">
                        Start Analyzing
                      </span>
                    </div>
                    <span className="text-[14px] text-[#7d8590]">14s</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
