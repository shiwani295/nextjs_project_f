import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AboutdetailPage = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const rounter = useRouter();

  const id = rounter.query.aboutid;

  const developer = details.find((item) => item.id === parseInt(id));

  return (
    <div>
      {developer ? (
        <p>
          {developer.name} {developer.role}
        </p>
      ) : (
        <p>Developer not exist</p>
      )}
    </div>
  );
};

export default AboutdetailPage;
