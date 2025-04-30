import Link from "next/link";
import "@/styles/globals.css";
import Dropdown from "./dropdown";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Get current user session on load
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    // Also listen for changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Cleanup on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="flex flex-wrap gap-6 menubar">
          <Link href="/">Home</Link>

          {/* Dropdowns */}
          <div className="relative">
            <Dropdown
              label="About"
              isOpen={openDropdown === "About"}
              onToggle={() => setOpenDropdown(openDropdown === "About" ? null : "About")}
              options={[
                { label: "About TTAMS", path: "/about/about-ttams" },
                { label: "General Information", path: "/about/general-information" },
                { label: "Counselling Wellbeing Focuses", path: "/about/counselling-focuses" },
                { label: "Therapeutic Counselling", path: "/about/therapeutic-counselling" },
                { label: "Introduction to Family Mediation", path: "/about/ttams-fam-mediation" },
                { label: "Introduction to Restorative Justice Mediation", path: "/about/intro-restorative-justice" },
              ]}
            />
          </div>

          <div className="relative">
            <Dropdown
              label="Therapies"
              isOpen={openDropdown === "Therapies"}
              onToggle={() => setOpenDropdown(openDropdown === "Therapies" ? null : "Therapies")}
              options={[
                { label: "Relationship Counselling", path: "/therapies/relationship-counselling" },
                { label: "Family Counselling", path: "/therapies/family-counselling" },
                { label: "Family Mediation", path: "/therapies/family-mediation" },
                { label: "Restorative Justice Mediation", path: "/therapies/restorative-justice" },
              ]}
            />
          </div>

          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>

        {/* Auth buttons */}
        <div className="authbar auth-button">
          {user ? (
            <>
              <Link href="/auth/profile/account-settings">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Settings</button>
              </Link>
              <button onClick={handleLogout} className="px-4 py-2 ml-2 bg-red-500 text-white rounded-lg">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/authpage">
                <button className="px-4 py-2 bg-custom-red text-white rounded-lg">Sign In</button>
              </Link>
              <span>|</span>
              <Link href="/auth/signup">
                <button className="px-4 py-2 text-white rounded-lg">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
