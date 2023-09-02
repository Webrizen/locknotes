import Create from "@/components/Create";

export const metadata = {
  title: `Create a Secret Note`,
  description: `Create a secure and self-destructing secret note on LockNotes. Share confidential information with confidence.`,
}

export default function page() {

  return (
    <>
      <Create />
    </>
  );
}
