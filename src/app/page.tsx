"use client";
import { decodeToken } from "@utils/decodeToken";
import { ChangeEvent, useState } from "react";
import { ReactJson } from "@components/ReactJson";
import { TextArea } from "@components/TextArea";

export default function Home() {
  const [token, setToken] = useState({
    jwt: "",
    decoded: {},
  });

  function handleDecodeToken() {
    if (token.jwt) {
      const decodedToken = decodeToken(token.jwt);

      setToken({
        decoded: decodedToken,
        jwt: token.jwt,
      });
    }
  }

  function handleChangeToken(e: ChangeEvent<HTMLTextAreaElement>) {
    setToken({
      jwt: e.target.value,
      decoded: token.decoded,
    });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900">
      <section className="flex w-full flex-col items-center space-y-6 px-8 sm:w-min">
        <h1 className="text-4xl font-semibold text-zinc-50">Decode Token</h1>

        <TextArea onChangeToken={handleChangeToken} />

        <button
          onClick={handleDecodeToken}
          className="self-center rounded-md bg-pink-600 px-4 py-2 text-slate-50"
          type="button"
        >
          Decode
        </button>

        <ReactJson token={token.decoded} />
      </section>
    </main>
  );
}
