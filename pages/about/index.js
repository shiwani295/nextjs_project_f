import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <ul>
        <li>
          <Link href="/about/1">yash</Link>
        </li>
        <li>
          <Link href="/about/2">vaibhav</Link>
        </li>
        <li>
          <Link href="/about/3">Suresh</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
