import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactUs() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!form.current) return;
  
    emailjs
      .sendForm(
        "service_ca9um0g",
        "template_z2hlicc",
        form.current,
        "_bKJPbax_qvNFMcC5"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!"); // ✅ Show toast here
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again."); // ✅ Show toast here
        }
      );
  };
  

  return (
    <div style={{ backgroundColor: "#F3E8D8", color: "black", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <h1 className="h1-styles" style={{ marginBottom: "2rem" }}>Contact Us</h1>
        <ToastContainer position="bottom-right" autoClose={3000} />
        <form ref={form} onSubmit={sendEmail} style={{ maxWidth: "500px", width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          />
          <input 
            type="email" 
            name="reply_to" 
            placeholder="Your Email" 
            required
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows={5}
            required
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid #ccc" }}
          ></textarea>
          <button 
            type="submit" 
            style={{ padding: "0.75rem", borderRadius: "0.5rem", border: "none", backgroundColor: "black", color: "white", fontWeight: "bold", cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;
