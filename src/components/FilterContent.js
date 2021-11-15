import Switch from "react-switch";

const FilterContent = ({ checked, handleChange }) => {
  return (
    <div>
      <label>
        <span>Trier par prix : </span>
        <Switch
          onChange={handleChange}
          checked={checked}
          handleDiameter={28}
          offColor="#09b0ba"
          onColor="#09b0ba"
          offHandleColor="#fff"
          onHandleColor="#fff"
          uncheckedIcon={<div></div>}
          checkedIcon={<div></div>}
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 20,
              }}
            >
              ↑
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
              }}
            >
              ↓
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
    </div>
  );
};
export default FilterContent;
