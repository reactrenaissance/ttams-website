import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

function PrivacyPolicy() {
    return (
      <div style={{ backgroundColor: '#9592ED'}} >
        <Navbar />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
          paddingTop: '40px'
        }} >
          <div
          style={{
            maxWidth: '80%',
            width: '100%',
            textAlign: 'start',
          }}
          >
            <h1 className=" h1-styles " >Privacy Policy</h1>
            <h2 className=" h2-styles mt-8" >1. Informed Consent for Data Collection & Usage</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg " >
              <li>Clients must explicitly agree to the collection and storage of their personal profile information and therapy notes.</li>
              <li>Clear descriptions should be provided on why each type of data is collected and how it will be used.</li>
              <li>Include consent checkboxes during account creation and profile setup for:
                <ul className=" list-disc list-inside pl-4 space-y-2 text-lg ">
                  <li>Personal account data (name, email, etc.)</li>
                  <li>Therapy session notes storage and access</li>
                </ul>
              </li>
            </ul>
            <h2 className=" h2-styles mt-8 ">2. Consent for Data Sharing & Third-Party Access</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg " >
              <li>Clients should be informed if their data will be shared with:
                <ul className=" list-disc list-inside pl-4 space-y-2 text-lg " >
                  <li>Their therapist (explicit permission for therapists to access and store notes)</li>
                  <li>Any third-party services (e.g., analytics, payment processors, external health apps)</li>
                </ul> 
              </li>
              <li>Clients must be able to grant or withdraw consent for sharing their data at any time.</li>
            </ul>
            <h2 className=" h2-styles mt-8 ">3. Right to Withdraw Consent</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg mt-8">
              <li className=" p-styles ">Clients should be able to delete their account or request data deletion at any time.</li>
              <li className=" p-styles ">The system should provide a simple way to withdraw consent for specific data (e.g., personal notes, account profile).</li>
              <li className=" p-styles ">Consider a cooling-off period where a client can change their mind before full deletion.</li>
            </ul>
            <h2 className=" h2-styles mt-8 ">4. Consent for Data Retention Periods  </h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg ">
            <li className=" p-styles ">Define how long TTAMS will retain therapy notes and personal data.</li>
            <li className=" p-styles ">Allow clients to choose:
              <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg">
              <li className=" p-styles ">Permanent storage (until they request deletion)</li>
              <li className=" p-styles ">Automatic deletion after a specified period (e.g., 6 months, 1 year)</li>
              <li className=" p-styles ">Manual deletion (clients can delete therapy notes whenever they want)</li>
              </ul>
            </li>
            </ul>
            <h2 className=" h2-styles mt-8 ">5. Consent for Communication Preferences</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg ">
              <li>Allow clients to opt in/out of:
                <ul className=" list-disc list-inside pl-4 space-y-2 text-lg ">
                  <li>Session reminders</li>
                  <li>Marketing emails (if applicable)</li>
                  <li>Follow-up communications from therapists</li>
                </ul>
              </li>
              <li>Provide a settings page where clients can update their preferences.</li>
            </ul>

            <h2 className=" h2-styles ">6. Parental or Guardian Consent (if applicable)</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg ">
              <li>If minors are allowed on TTAMS, include an age verification system.</li>
              <li>Require guardian consent for account creation and therapy data retention.</li>
            </ul>

            <h2 className=" h2-styles ">7. Audit Trail & Record-Keeping of Consents</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg ">
              <li>Store timestamps and logs of when clients give or withdraw consent.</li>
              <li>Ensure that any changes to consent preferences are recorded.</li>
            </ul>

            <h2 className=" h2-styles ">8. Legal Compliance (GDPR, HIPAA, etc.)</h2>
            <ul className=" p-styles list-disc list-inside pl-4 space-y-2 text-lg ">
              <li>If operating in the EU, ensure compliance with GDPR (users should be able to download or delete their data).</li>
              <li>If dealing with health-related data in the US, ensure HIPAA compliance (secure storage, data encryption, limited access).</li>
              <li>Provide a privacy policy that outlines all data management practices.</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  {/*<ul className=" p-styles "></ul>*/}
  {/*<li className=" p-styles "></li>*/}

  export default PrivacyPolicy;