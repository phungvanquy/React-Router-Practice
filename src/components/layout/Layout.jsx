import classes from "../layout/Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react/cjs/react.production.min";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
