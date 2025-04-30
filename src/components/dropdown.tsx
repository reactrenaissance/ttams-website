import Link from "next/link";
import { useState } from "react";

interface DropdownOption {
    label: string;
    path?: string; 
    subOptions?: DropdownOption[]; 
  }

interface DropdownProps {
    label: string;
    options: DropdownOption[],
    isOpen: boolean;
    onToggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, isOpen, onToggle}) => {
    const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

    return (
        <div className="relative">
          {/* Dropdown Button */}
          <button
          onClick={onToggle}
          className="text-black font-medium hover:underline align-middle leading-[1.5rem] px-0"
            >
            {label} ▾
          </button>
      
          {/* Main Dropdown Menu */}
          {isOpen && (
            <ul className="absolute left-0 top-full mt-2 bg-[#F4EEE6] shadow-md rounded-md z-50 min-w-[220px] divide-y divide-[#D6CFC2] p-2 list-none">
              {options.map((option, index) => (
                <li key={index}>
                  {option.path ? (
                    <Link href={option.path} className="block hover:underline">
                      {option.label}
                    </Link>
                  ) : (
                    // Nested Dropdown
                    <div>
                      <button
                        onClick={() =>
                          setOpenSubmenu(openSubmenu === index ? null : index)
                        }
                        className="text-black font-medium hover:underline"
                        aria-expanded={openSubmenu === index}
                      >
                        {option.label}
                      </button>
      
                      {/* Submenu */}
                        {openSubmenu === index && option.subOptions && (
                        <ul className="absolute top-0 left-full ml-2 bg-white shadow-md rounded-md z-50 min-w-[220px] p-2 space-y-1">
                            {option.subOptions.map((subOption, subIndex) => (
                            <li key={subIndex}>
                                <Link
                                href={subOption.path || "#"}
                                className="block hover:underline"
                                >
                                {subOption.label}
                                </Link>
                            </li>
                            ))}
                        </ul>
                        )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      );      
    }      

export default Dropdown;