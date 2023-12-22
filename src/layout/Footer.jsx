function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-1 md:p-4 bg-black bg-opacity-90 md:bg-opacity-20">
      <span className="text-sm text-gray-300 md:text-white">
        © 2023{' '}
        <a
          href="https://github.com/Sillor/taplegacy"
          className="underline hover:no-underline"
        >
          Egor Strakhov
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
