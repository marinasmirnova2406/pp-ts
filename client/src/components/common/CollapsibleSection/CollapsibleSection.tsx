import React, { useState } from "react";

const CollapsibleSection: React.FC<{
  title: string;
  marker?: boolean;
  children: React.ReactNode;
  additionalClass?: string;
}> = ({ title, marker = true, children, additionalClass = ""}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapsible-section ${additionalClass}`}>
      <div className="collapsible-section__head" onClick={toggleVisibility}>
        <h3 className="collapsible-section__title">
          {title}
        </h3>
        <div className="collapsible-section__marker">
          {marker ? (isOpen ? "▲" : "▼") : ""}
        </div>
      </div>

      {isOpen && <div className="collapsible-section__content">{children}</div>}
    </div>
  );
};

export { CollapsibleSection };