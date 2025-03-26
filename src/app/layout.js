// import Navbar from "@/components/common/Navbar";
// import Footer from "@/components/common/Footer";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main>{children}</main>
//         <Footer/>
//       </body>
//     </html>
//   );
// }


export const metadata = {
  title: "Novello globe Hotels & Resorts",
  description: "Welcome to The Novello by Hotel Evergreen, a serene getaway amidst the hills of Mussoorie.",
  icons: {
    icon: "/favicon.ico",
  },
};

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

