"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log("Session data:", session); // ตรวจสอบค่า session
    if (session) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [session, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card max-w-md w-full bg-base-100 shadow-xl p-6">
        <div className="card-body">
          <h2 className="card-title text-2xl text-primary">User Information</h2>
          {session ? (
            <>
              <p className="font-semibold">Name: {session.user.name}</p>
              <p className="font-semibold">Email: {session.user.email}</p>
              <p className="font-semibold">Role: {session.user.role}</p>
              <p className="text-sm text-gray-500">
                Expires: {new Date(session.expires).toLocaleString()}
              </p>
            </>
          ) : (
            <p className="text-red-500">You are not authenticated.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
