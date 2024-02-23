import { useState } from "react";

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="mb-4">
        <div
          className="bg-gray-700 px-4 py-2 cursor-pointer flex justify-between items-center"
          onClick={toggleAccordion}
        >
          <h4 className="text-lg font-semibold">{title}</h4>
          <span className="text-white">{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && (
          <div className="bg-gray-800 px-4 py-2">
            {children}
          </div>
        )}
      </div>
    );
  };
  
  export default Accordion;
  