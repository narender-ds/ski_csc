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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
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
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER_ID || '', // Thank-you template ID
                commonParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
            );

            alert("Form submitted successfully!");
            setIsSubmitting(false);
        } catch (err) {
            console.error("Error sending email:", err);
            alert("Failed to send form. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6">
            <label className="block mb-2 font-medium">Business Name</label>
            <input type="text" name="businessName" onChange={handleChange} required className="w-full border p-2 mb-4 rounded" />

            <label className="block mb-2 font-medium">Email</label>
            <input type="email" name="email" onChange={handleChange} required className="w-full border p-2 mb-4 rounded" />

            <label className="block mb-2 font-medium">Phone</label>
            <input type="text" name="phone" onChange={handleChange} required className="w-full border p-2 mb-4 rounded" />

            <label className="block mb-2 font-medium">Description</label>
            <textarea name="description" onChange={handleChange} className="w-full border p-2 mb-4 rounded" rows={4}></textarea>

            <label className="block mb-2 font-medium">Services Needed</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {[
                    'Home Loan Assistance',
                    'Property Registration',
                    'Property Valuation',
                    'EMI Planning & Guidance',
                    'Loan Refinance Help',
                    'Document Support',
                ].map(service => (
                    <label key={service} className="flex items-center">
                        <input
                            type="checkbox"
                            value={service}
                            onChange={handleCheckbox}
                            className="mr-2"
                        />
                        {service}
                    </label>
                ))}
            </div>

            <button type="submit" disabled={isSubmitting} className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
            {isSubmitting && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
            ></path>
          </svg>
        )}
        {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default RequirementForm;
