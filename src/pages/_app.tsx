import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <div className="m-auto flex h-screen max-w-7xl flex-col px-6 py-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
