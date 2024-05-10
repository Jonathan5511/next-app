import Link from "next/link";
import { Fragment } from "react";

const AboutusPage = () => {
  return (
    <Fragment>
      <h1>The AboutUs Page</h1>
      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutusPage;
