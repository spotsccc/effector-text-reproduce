import "@/styles/globals.css";
import { EffectorNext, getClientScope } from "@effector/next";
import type { AppProps } from "next/app";
import { debug } from "patronum";

const scope = getClientScope();

if (scope) {
  debug.registerScope(scope, { name: "client_scope" });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EffectorNext values={pageProps.values}>
      <Component {...pageProps} />
    </EffectorNext>
  );
}
