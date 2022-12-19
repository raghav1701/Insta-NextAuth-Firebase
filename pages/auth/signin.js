import { async } from "@firebase/util";
import { getProviders, signIn } from "next-auth/react";

export default function signinComponent({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-3 bg-blue-500 rounded-lg text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
