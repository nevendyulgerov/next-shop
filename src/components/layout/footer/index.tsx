export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg m-4 dark:bg-gray-800 h-14 -mt-12 shadow-sm ">
      <div className="flex justify-center items-center w-full h-full">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Created by{" "}
          <a
            href="https://github.com/nevendyulgerov"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
            data-testid="github-link"
          >
            Neven Dyulgerov
          </a>
        </span>
      </div>
    </footer>
  );
};
