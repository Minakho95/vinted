import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader">
      <ClipLoader color={"#0cadb7"} loading size={200} />
    </div>
  );
};
export default Loader;
