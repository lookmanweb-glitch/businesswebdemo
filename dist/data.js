import React from 'react';
import { Activity, FileText, UploadCloud } from 'lucide-react';
export const BIZ_OPTIONS = ["E-Commerce", "Retail", "Marketing", "Consultancy"];
export const STEPS_DATA = [
    {
        width: '30%',
        title: 'Track Application Status',
        desc: 'Real-time updates on your trade license progress.',
        icon: React.createElement(Activity, { className: "w-5 h-5" })
    },
    {
        width: '65%',
        title: 'Document Verification',
        desc: 'Reviewing submitted passports and entry permits.',
        icon: React.createElement(FileText, { className: "w-5 h-5" })
    },
    {
        width: '100%',
        title: 'Upload Pending Files',
        desc: 'Waiting for final signature upload to proceed.',
        icon: React.createElement(UploadCloud, { className: "w-5 h-5" })
    }
];
export const PRICING_PLANS = [
    {
        title: "Dubai Mainland",
        basePrice: 14999,
        visaPrice: 18500,
        desc: "Unlock the Business Potential in the Heart of Dubai!",
        features: ["Commercial | Professional License", "Tax consultation", "Local sponsor support", "Office space assistance"]
    },
    {
        title: "Freezone",
        basePrice: 5500,
        visaPrice: 9000,
        desc: "Leverage the Benefits of our Exclusive Freezone Package!",
        features: ["Commercial | Professional License", "Virtual office agreement", "100% Import & Export Tax exemption", "Flexi-desk option"]
    },
    {
        title: "UAE Offshore",
        basePrice: 7500,
        visaPrice: 7500,
        desc: "Perfect Balance of Quality and Affordability!",
        features: ["1 year Govt Incorporation Fee", "100% Ownership", "Anonymous ownership structure", "No audit requirement"],
        isOffshore: true
    }
];
export const SERVICES = [
    { title: "Free Zone Company Setup", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp", desc: "Start your business with 100% foreign ownership and tax benefits." },
    { title: "Mainland Company Setup", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg", desc: "Ideal for businesses that require full access to the UAE market." },
    { title: "Meydan Freezone", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg", desc: "Designed for entrepreneurs seeking a cost-effective UAE setup." }
];
