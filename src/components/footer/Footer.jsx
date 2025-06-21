import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          {/* <hr className="my-6 border-blueGray-300"> */}
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2025</span>
                <a
                  href="https://www.linkedin.com/in/abdul-rehman-shahid-003050315/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {" "}
                  Fine Industrial Co
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
