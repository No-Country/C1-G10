import Link from "next/link";

export default function Success() {
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
