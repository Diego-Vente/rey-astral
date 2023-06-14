import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="fb"
            href={socialMedia.fb}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              width="24"
              height="24"
              alt="test"
              src="../assets/images/fb.jpeg"
            />
          </a>
          <a
            aria-label="ig"
            href={socialMedia.ig}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              width="24"
              height="24"
              alt="test"
              src="../assets/images/ig.jpeg"
            />
          </a>
          <a
            aria-label="wsp"
            href={socialMedia.wsp}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              width="24"
              height="24"
              alt="test"
              src="../assets/images/wsp.jpeg"
            />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="https://mobile-pipes.netlify.app/" rel="nofollow">
              Mobile Pipes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
