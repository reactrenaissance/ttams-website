import React from 'react';
import TariffTables from '../../../components/TariffTables'
import { tariffData } from '../../../data/fmTariffData'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClient';


const FMTariffs = () => {

    const router = useRouter();
    useEffect(() => {
    const checkSession = async () => {
        const {
        data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
        router.push('/auth/authpage');
        }
    };

    checkSession();
    }, []);


    return (
      <div style={{ backgroundColor: '#F3E8D8', color: 'black' }} >
          <Navbar />
          <div className="tariff-page">
          <h1>Family Mediation Tariffs</h1>
          <p>We offer flexible pricing plans based on income brackets to ensure mediation is accessible for all.</p>
          <br/>
          <h2>How Pricing Works</h2>
          <ol>
            <li>1. Find your income bracket.</li>
            <li>2. Choose a session plan (single or bundle).</li>
            <li>3. Select your preferred payment option.</li>
          </ol>
          <TariffTables data={tariffData} />
          </div>
          <Footer />
      </div>
    );
  };
  
  export default FMTariffs;