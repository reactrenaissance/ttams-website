import { getSession } from "next-auth/react";
import type { Session } from "next-auth"
import { GetServerSidePropsContext } from "next"

export default function Profile({ session} : { session: Session | null}) {
  if (!session) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {session.user?.name}!</p>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
