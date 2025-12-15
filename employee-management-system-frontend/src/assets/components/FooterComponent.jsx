import React from 'react';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center py-3 mt-auto">
      <p className="mb-0">
        © {currentYear} All rights reserved by rahulkaledev
      </p>
    </footer>
  );
};

export default FooterComponent;
