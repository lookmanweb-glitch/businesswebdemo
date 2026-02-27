import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { BIZ_OPTIONS } from '../data.js';
import { Header } from './Header.js';
export const Hero = () => {
    const [bizTypeIndex, setBizTypeIndex] = useState(0);
    const [calcState, setCalcState] = useState({ progress: [0, 0, 0], text: "Analyzing needs...", step: "Step 1/3" });
    useEffect(() => {
        const timer = setInterval(() => {
            setBizTypeIndex(prev => (prev + 1) % BIZ_OPTIONS.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        let cycle = 0;
        const interval = setInterval(() => {
            cycle = (cycle + 1) % 4;
            if (cycle === 0)
                setCalcState({ progress: [0, 0, 0], text: "Analyzing needs...", step: "Step 1/3" });
            else if (cycle === 1)
                setCalcState({ progress: [100, 0, 0], text: "Calculating fees...", step: "Step 2/3" });
            else if (cycle === 2)
                setCalcState({ progress: [100, 100, 0], text: "Checking availability...", step: "Step 3/3" });
            else if (cycle === 3)
                setCalcState({ progress: [100, 100, 100], text: "Optimization Complete", step: "Done" });
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "bg-center flex flex-col w-full bg-[url(https://images.unsplash.com/photo-1637825891028-564f672aa42c?w=3840&q=80)] bg-cover relative", children: [_jsx(Header, {}), _jsx("div", { className: "max-w-7xl mx-auto px-6 pt-12 pb-20 w-full", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "flex flex-col gap-2 z-10", children: [_jsx("h1", { className: "leading-[1.15] lg:text-5xl text-4xl font-normal text-stone-300 tracking-tight", children: "AI-Powered UAE Business Setup" }), _jsxs("div", { className: "mt-10 lg:mt-16", children: [_jsx("p", { className: "lg:text-2xl text-xl font-normal text-amber-100", children: "Starting From" }), _jsx("p", { className: "lg:text-5xl text-4xl font-semibold text-blue-600 tracking-tight mt-2", children: "Dhs 7,000" })] })] }), _jsxs("div", { className: "min-h-[500px] flex w-full relative items-center justify-center overflow-hidden", children: [_jsx("div", { className: "bg-center bg-no-repeat bg-contain w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ddb754e-510f-4bf4-99fa-8dce7134efcd_800w.png?w=800&q=80)] rounded-2xl p-1 absolute inset-0 opacity-80" }), _jsxs("div", { className: "w-full h-[400px] max-w-[400px] relative", children: [_jsxs("div", { className: "z-20 bg-white/90 w-[280px] border-white/40 border rounded-2xl p-6 absolute top-10 right-0 shadow-2xl backdrop-blur-xl transition-all duration-700", children: [_jsx("h3", { className: "font-semibold text-lg text-gray-900 mb-4 tracking-tight", children: "Business Type" }), _jsx("div", { className: "flex flex-wrap gap-2 relative z-10", children: BIZ_OPTIONS.map((opt, i) => (_jsx("button", { className: `px-3 py-1.5 rounded-lg text-[10px] transition-all duration-300 border ${i === bizTypeIndex
                                                            ? 'font-semibold border-blue-600 bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-600/20'
                                                            : 'font-medium border-gray-200 bg-white text-gray-500'}`, children: opt }, opt))) }), _jsx("div", { className: "absolute w-6 h-6 z-50 pointer-events-none drop-shadow-xl transition-all duration-500 ease-in-out", style: {
                                                        transform: `translate(${[20, 100, 180, 50][bizTypeIndex]}px, ${[50, 50, 50, 90][bizTypeIndex]}px)`
                                                    }, children: _jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "transform -rotate-12", children: _jsx("path", { d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z", fill: "black", stroke: "white", "stroke-width": "1.5" }) }) })] }), _jsxs("div", { className: "z-30 transition-all duration-500 bg-white/90 w-[280px] border-white/40 border rounded-2xl p-6 absolute bottom-10 left-0 shadow-2xl backdrop-blur-xl", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h3", { className: "font-bold text-lg text-gray-900 tracking-tight", children: "Cost Est." }), _jsx("span", { className: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100", children: calcState.step })] }), _jsx("div", { className: "flex items-center gap-1.5 mb-6", children: calcState.progress.map((p, i) => (_jsx("div", { className: "flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-blue-500 transition-all duration-700 ease-out", style: { width: `${p}%` } }) }, i))) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-8 w-8 rounded-lg flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-500", children: _jsx(Loader2, { className: "animate-spin w-4 h-4" }) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-xs font-bold text-gray-800 tracking-tight transition-all duration-300", children: calcState.text }), _jsx("span", { className: "text-[10px] text-gray-400 font-medium", children: "AI Engine" })] })] })] })] })] })] }) })] }));
};
