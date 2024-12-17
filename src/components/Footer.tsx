import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    

<footer className="bg-black dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between w-full p-4 py-3 lg:py-8">
          <span className="text-sm text-slate-300 sm:text-center dark:text-gray-400">© 2024 Tejaswini Banala. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              
              <Link to="https://github.com/tejaswinibanala" className="text-slate-300 hover:text-slate-400 dark:hover:text-white ms-5">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </Link>
              <Link to="https://www.linkedin.com/in/tejaswini-banala/" className="text-slate-300 hover:text-slate-400 dark:hover:text-white ms-5">
                <svg
                    className="w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                <path d="M20.447 20.452H16.9v-5.66c0-1.35-.027-3.083-1.879-3.083-1.88 0-2.17 1.466-2.17 2.981v5.762h-3.55V9h3.41v1.561h.048c.474-.895 1.636-1.84 3.368-1.84 3.6 0 4.265 2.367 4.265 5.445v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.141 2.07 2.07 0 0 1 0 4.141zM7.232 20.452H3.443V9h3.789v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
               </Link>


          </div>
    </div>
</footer>

  )
};
export default Footer;
