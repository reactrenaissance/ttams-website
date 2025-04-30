import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/utils/supabaseClient';
import TariffTables from '../../../components/TariffTables'
import { rjTariffData } from '../../../data/rjTariffData'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const RJTariffs = () => {
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
        <h1>Restorative Justice Mediation Tariffs</h1>
        <p>We offer flexible pricing plans based on income brackets to ensure mediation is accessible for all.</p>
          <br/>
          <h2>How Pricing Works</h2>
          <ol>
            <li>Find your income bracket.</li>
            <li>Choose a session plan (single or bundle).</li>
            <li>Select your preferred payment option.</li>
          </ol>
        <TariffTables data={rjTariffData} />
        </div>
        <Footer />
    </div>
  );
};

export default RJTariffs;
