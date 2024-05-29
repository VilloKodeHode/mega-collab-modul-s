import React from "react";

interface LinksProps {
  children: React.ReactNode;
}

const Links: React.FC<LinksProps> = ({ children }) => {
  return (
    <div>
      <link rel="stylesheet" href="/app/page.tsx" />
      {children}
    </div>
  );
};

export default Links;
