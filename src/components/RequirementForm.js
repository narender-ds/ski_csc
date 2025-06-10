'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const RequirementForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    description: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...formData.services, value]
      : formData.services.filter((item) => item !== value);
    setFormData({ ...formData, services: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send using EmailJS
    emailjs.send(
      'service_01c0jkr',
      'template_lew4k0m',
      formData,
      '_VhA_cs3XRDp7-oAd'
    ).then(() => {
      alert("Form sent successfully!");
    }).catch(err => {
      console.error(err);
      alert("Failed to send form");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Website Requirement Form</h2>

      <label>Business Name</label>
      <input type="text" name="businessName" onChange={handleChange} className="border w-full p-2 mb-3" />

      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} className="border w-full p-2 mb-3" />

      <label>Phone</label>
      <input type="text" name="phone" onChange={handleChange} className="border w-full p-2 mb-3" />

      <label>Description</label>
      <textarea name="description" onChange={handleChange} className="border w-full p-2 mb-3"></textarea>

      <label>Services Needed</label><br />
      {["PAN Card", "Aadhar Update", "Bill Payment", "Insurance"].map(service => (
        <label key={service} className="block">
          <input type="checkbox" value={service} onChange={handleCheckbox} />
          <span className="ml-2">{service}</span>
        </label>
      ))}

      <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default RequirementForm;
