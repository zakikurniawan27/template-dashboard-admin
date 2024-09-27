import { Spinner } from "reactstrap";

const loader = () => {
  return (
    <div className="fallback-spinner">
      <div className="loading">
        <Spinner color="primary" />
      </div>
    </div>
  );
};

export default loader;
