import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 300;

const RangeContent = ({ values, setValues }) => {
  return (
    <div className="range-filter">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            {/* selected bar range */}
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#0cadb7", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          // circles
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "15px",
              backgroundColor: "#0cadb7",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            {/* price circle */}
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Maison Neue",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#0cadb7",
              }}
            >
              {values[index].toFixed(0)}€
            </div>
          </div>
        )}
      />
    </div>
  );
};
export default RangeContent;
