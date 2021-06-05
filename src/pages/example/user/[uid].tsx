import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const { uid } = router.query;

  return <p>user: {uid}</p>;
};

export default User;
