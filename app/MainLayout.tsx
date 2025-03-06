import Footer from "@/components/elements/Footer";
import NavBar from "@/components/elements/NavBar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>

      
        
      
    
  );
}
