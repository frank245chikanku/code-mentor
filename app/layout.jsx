import "@styles/globals.css";

export const metadata = {
  title: "Code-Mentor",
  description: "Elevate Your Coding with",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Rootlayout;
