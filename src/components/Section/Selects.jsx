import React, { useState, useEffect, useRef } from "react";

export const Selects = ({ name, value, options = [], onChange }) => {
    const [open, setOpen] = useState(false);
    const selectRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleSelect = (val, e) => {
        e.stopPropagation();
        onChange({ target: { name, value: val } });
        setOpen(false);
    };

    const currentLabel =
        options.find((item) => item.value === value)?.name ||
        options[0]?.name;

    return (
        <div
            ref={selectRef}
            className={`dropdown nice-select form-control mb-3 ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
        >
            <span className="current dropdown-toggle">{currentLabel}</span>

            {open && (
                <ul className="list dropdown-menu show">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="dropdown-item option"
                            onClick={(e) => handleSelect(option.value, e)}
                        >
                            {option.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
