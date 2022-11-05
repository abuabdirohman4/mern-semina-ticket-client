import * as React from "react";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";

export default function IndexDate({ date, onChangeDate, setIsShowed }) {
  React.useEffect(() => {
    console.log("first useEffect");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("second useEffect");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = React.useRef(null);
  const handleClickOutside = (event) => {
    console.log("handleClickOutside");
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    console.log("check");
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  return (
    <div
      className="position-absolute"
      // style={{ top: '59px' }}
      style={{ zIndex: "1" }}
      ref={refDate}
    >
      <DateRange
        locale={locales["id"]}
        editableDateInputs={true}
        onChange={onChangeDate}
        moveRangeOnFirstSelection={false}
        onRangeFocusChange={check}
        ranges={[date]}
        maxDate={new Date()}
      />
    </div>
  );
}
