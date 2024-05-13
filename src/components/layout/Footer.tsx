// src/components/layout/Footer.tsx

import { FOOTER_LINKS, FOOTER_TWITTER_LINK } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-t-2xl shadow-t-3xl">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center items-center flex-col sm:flex-row sm:justify-between">
          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href} className="text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  className="hover:underline me-4 md:me-6"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href={FOOTER_TWITTER_LINK.href} className="hover:underline">
            {FOOTER_TWITTER_LINK.title}
          </a>
        </span>
      </div>
    </footer>
  );
}
