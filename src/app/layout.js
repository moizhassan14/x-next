import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import { AuthContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X-Next App",
  description: "A Clone of X website using NEXT.Js and Tailwind.css ",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="hidden sm:inline border-r h-screen">
              <Sidebar />
            </div>
            <div>{children}</div>
            <div className="lg:flex-col p-3 h-screen border-1 hidden lg:flex w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search.."
                  className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2 "
                ></input>
              </div>
              <News />
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
