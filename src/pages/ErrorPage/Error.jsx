import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <p>Ups, wrong address, this page not exist!</p>
      <i>{error.statusText || error.message}</i>
    </>
  );
};

export default Error;
