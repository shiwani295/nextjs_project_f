import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const [member, setMember] = useState();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();

  const id = router.query.newsId;
  let developer = details.find((item) => item.id === parseInt(id));
  return (
    <div>
      {developer ? (
        <p>
          {developer.name} {developer.role}
        </p>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default DetailPage;
