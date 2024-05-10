import { useRouter } from "next/router";
import { Fragment } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

const Developer = () => {
  const router = useRouter();
  const developer = router.query.developer;
  const filteredDetails = [];
  for (let i = 0; i < details.length; i++) {
    if (String(details[i].id) === developer) {
      filteredDetails.push(details[i].id, details[i].name, details[i].role);
    }
  }
  return (
    <Fragment>
      {filteredDetails[0] && (
        <h1>
          {filteredDetails[1]} is a {filteredDetails[2]}
        </h1>
      )}
      {!filteredDetails[0] && <h1>Does not exist</h1>}
    </Fragment>
  );
};
export default Developer;
