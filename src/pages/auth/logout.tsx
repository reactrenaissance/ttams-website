import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  }, [router]);

  return <p>Logging you out...</p>;
};

export default Logout;
