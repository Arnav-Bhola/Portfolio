import { useRouteError } from "react-router-dom";

import styles from "./Error.module.scss";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.message}>{message}</p>
    </>
  );
};

export default ErrorPage;
