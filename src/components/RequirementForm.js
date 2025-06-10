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

    const commonParams = {
      name: formData.businessName,
      email: formData.email,
      phone: formData.phone,
      description: formData.description,
      services: formData.services.join(', '),
      time: new Date().toLocaleString(),
    };

    try {
      // Email to Admin (you)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Admin template ID
        commonParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      // Thank-you email to user
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID|| '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID || '', // Thank-you template ID
        commonParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY|| ''
      );

      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Website Requirement Form</h2>

      <label>Business Name</label>
      <input type="text" name="businessName" onChange={handleChange} className="border w-full p-2 mb-3" required />

      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} className="border w-full p-2 mb-3" required />

      <label>Phone</label>
      <input type="text" name="phone" onChange={handleChange} className="border w-full p-2 mb-3" required />

      <label>Description</label>
      <textarea name="description" onChange={handleChange} className="border w-full p-2 mb-3" required></textarea>

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
