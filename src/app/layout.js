import Navbar from "@/components/common/Navbar"; // Adjust the path to your Navbar component
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Add the Navbar component here */}
        <main>{children}</main> {/* Main content for each page */}
      </body>
    </html>
  );
}
