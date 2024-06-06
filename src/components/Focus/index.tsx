import { useRef } from "react";

const Focus = () => {
  const inpuRef = useRef<HTMLInputElement>(null);

  
// after clicking on button we call mathod focis on input
  const handleClick = () => {
    inpuRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inpuRef} />
      <button type={"button"} onClick={handleClick}>
        Set Focus
      </button>
    </div>
  );
};

export default Focus;
