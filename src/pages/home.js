// import RequirementForm from "@/components/RequirementForm";

// const HomePage = () => {
//   return (
//     <main className="bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-blue-700 text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SKI Services</h1>
//         <p className="text-lg md:text-xl mb-6">
//           Hassle-free service solutions like PAN, Aadhaar, Bill Payments & more!
//         </p>
//         <a href="#enquiry-form" className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-gray-100">
//           Enquire Now
//         </a>
//       </section>

//       {/* Services Section */}
//       <section className="py-12 px-6 max-w-4xl mx-auto text-center">
//         <h2 className="text-2xl font-bold mb-6">Our Popular Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
//           {[
//             "✅ PAN Card Application & Update",
//             "✅ Aadhaar Card Update & Correction",
//             "✅ Electricity & Water Bill Payments",
//             "✅ Government Forms & Insurance Services",
//           ].map((item, i) => (
//             <div key={i} className="bg-white shadow p-5 rounded">{item}</div>
//           ))}
//         </div>
//       </section>

//       {/* Enquiry Form Section */}
//       <section id="enquiry-form" className="py-12 px-6 bg-white">
//         <RequirementForm />
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center py-4">
//         &copy; {new Date().getFullYear()} Narender eMitra Services. All rights reserved.
//       </footer>
//     </main>
//   );
// };

// export default HomePage;
import RequirementForm from "@/components/RequirementForm";
const HomePage = () => {
  return (
    <main className="bg-white text-gray-900 font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative bg-[url('/loan-bg.jpg')] bg-cover bg-center h-[90vh] flex items-center justify-center text-white px-6">
        <div className="bg-black/60 p-8 rounded-xl max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Simplifying <span className="text-yellow-400">Loans</span> & <span className="text-yellow-400">Property Services</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Hassle-free EMI guidance, documentation, registration, and valuation services.
          </p>
          <a href="#enquiry-form" className="bg-yellow-400 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-300">
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Loan & Property Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Home Loan Assistance', desc: 'We help you get the best deals and easy approvals for your home loan.' },
            { title: 'Property Registration', desc: 'Complete end-to-end property registration and legal help.' },
            { title: 'Property Valuation', desc: 'Know the exact market value of your property by certified experts.' },
            { title: 'EMI Planning & Guidance', desc: 'Manage your finances better with expert EMI planning and advice.' },
            { title: 'Loan Refinance Help', desc: 'Get better interest rates with quick loan refinance support.' },
            { title: 'Document Support', desc: 'We handle all required paperwork for banks, loans, and property.' },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Help With Your Loan or Property Work?</h2>
        <p className="mb-6">Get in touch with our team and let us take care of everything for you.</p>
        <a href="#enquiry-form" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100">
          Fill Enquiry Form
        </a>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Tell Us Your Requirement</h2>
          <RequirementForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 text-sm">
        © {new Date().getFullYear()} SKI Loan & Property Services. All rights reserved.
      </footer>
    </main>
  );
};

export default HomePage;
