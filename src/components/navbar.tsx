import Link from "next/link";
import "@/styles/globals.css";
import Dropdown from "./dropdown";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <nav className="w-full bg-[#BDB097] border-b border-[#a4947d] px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo or TTAMS */}
        <div className="text-lg font-semibold">
          <Link href="/">TTAMS</Link>
        </div>

        {/* Mobile toggle button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>

          <Dropdown
            label="About"
            isOpen={openDropdown === "About"}
            onToggle={() => setOpenDropdown(openDropdown === "About" ? null : "About")}
            options={[
              { label: "About TTAMS", path: "/about/about-ttams" },
              { label: "General Information", path: "/about/general-information" },
            ]}
          />

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

          <Link href="/contact-us">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>

          {/* Auth buttons */}
          {user ? (
            <>
              <Link href="/auth/profile/account-settings">
                <button className="px-4 py-1 bg-green-500 text-white rounded-lg">Settings</button>
              </Link>
              <button onClick={handleLogout} className="px-4 py-1 ml-2 bg-red-500 text-white rounded-lg">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/authpage">
                <button className="px-4 py-1 bg-custom-red text-white rounded-lg">Sign In</button>
              </Link>
              <Link href="/auth/signup">
                <button className="px-4 py-1 text-white rounded-lg">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

          <Dropdown
            label="About"
            isOpen={openDropdown === "About"}
            onToggle={() => setOpenDropdown(openDropdown === "About" ? null : "About")}
            options={[
              { label: "About TTAMS", path: "/about/about-ttams" },
              { label: "General Information", path: "/about/general-information" },
            ]}
          />

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

          <Link href="/contact-us" onClick={() => setMobileOpen(false)}>Contact Us</Link>
          <Link href="/privacy-policy" onClick={() => setMobileOpen(false)}>Privacy Policy</Link>

          <div className="pt-2 border-t">
            {user ? (
              <>
                <Link href="/auth/profile/account-settings">
                  <button className="w-full py-2 bg-green-500 text-white rounded-lg mt-2">Settings</button>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="w-full py-2 bg-red-500 text-white rounded-lg mt-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/authpage">
                  <button className="w-full py-2 bg-custom-red text-white rounded-lg mt-2">Sign In</button>
                </Link>
                <Link href="/auth/signup">
                  <button className="w-full py-2 text-white rounded-lg mt-2">Sign Up</button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
