import { useSession, signOut, signIn } from "next-auth/react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
      <header className="container flex flex-row items-center justify-between mx-auto mt-4">
        <div className="left">Instagram</div>
        <div className="center">Search Pannel</div>
        <div className="right space-x-5 flex">
          {!session ? (
            <div onClick={signIn} className="cursor-pointer">
              SignIn
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <div onClick={() => setOpen(true)} className="cursor-pointer">
                Upload
              </div>
              <div onClick={signOut} className="cursor-pointer">
                SignOut
              </div>
              <div className="text-sm">{session?.user?.email}</div>
              <div className="text-sm">{session?.user?.name}</div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
