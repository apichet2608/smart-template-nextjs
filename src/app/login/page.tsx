"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const session = useSession();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    console.log(result);

    if (result?.error) {
      setError("❌ Login failed: " + result.error);
    } else {
      // window.location.href = `${basePath}/home`; // ใช้ basePath
    }
  };

  return (
    <div>
      {JSON.stringify(session)}
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="flex gap-0.5">
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="input input-sm"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-sm"
          required
        />
        <button type="submit" className=" cursor-auto btn btn-primary btn-sm">
          Login
        </button>
      </form>
    </div>
  );
}
