import { Navbar, Sidebar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Muzyk App V2',
  description: 'Music App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex w-screen sm:max-w-[1920px] mx-auto">
        <Sidebar />

        <div className="flex-1 flex flex-col justify-between h-screen bg-gradient-to-b px-1 from-white from-70% to-secondary-400">
          <div className="h-16">
            <Navbar />
          </div>

          <div className="flex flex-col h-[calc(100vh-64px)] overflow-y-scroll hide-scrollbar">
            {children}
            <div className="w-full mt-1 bg-white/40 text-white rounded-t-md">
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
