"use client"

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { IoIosSend } from "react-icons/io";

interface FormFields {
    name: string,
    email: string,
    subject: string,
    message: string,
};

const ContactForm = () => {
    const SELECT_OPTIONS = [
        "Job Opportunity",
        "Project Inquiry",
        "General Message",
    ];

    const MAX_MESSAGE_LENGTH = 500;
    const SUBMISSION_COOLDOWN = 30000; // 30 seconds

    const [form, setForm] = useState<FormFields>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<FormFields>>({});
    const [lastSubmission, setLastSubmission] = useState<number>(0);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const getCharacterCounterColor = () => {
        const remainingCharacters = MAX_MESSAGE_LENGTH - form.message.length;
        const percentage = remainingCharacters/MAX_MESSAGE_LENGTH;

        if (remainingCharacters === 0){ return ("bg-red-600"); }
        else if (percentage <= 0.1){ return ("bg-red-500"); }
        else if (percentage <= 0.2){ return ("bg-orange-500"); }
        else { return ("bg-green-500"); }
    };
    
    const validateFormFields = (name: keyof FormFields, value: string) => {
        let error = "";
        let sanitized = value.trim();

        switch (name){
            case "name":
                const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-\s]+$/;

                if (!sanitized){
                    error = `A name is required!`;
                } else if (sanitized.length < 2){
                    error = `Name must be at least 2 characters.`;
                } else if (sanitized.length > 50){
                    error = `Name must be less than 50 characters.`;
                } else if (!nameRegex.test(sanitized)){
                    error = `This name contains invalid characters`;
                }
                break;
            case "email":
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                
                if (!sanitized){
                    error = `An email is required!`;
                } else if (sanitized.length < 5) {
                    error = "Email must greater than 5 characters.";
                } else if (sanitized.length > 254) {
                    error = "Email must be less than 254 characters.";
                } else if (!sanitized.includes("@")){
                    error = "Email must include an @ symbol."
                } else if (!emailRegex.test(sanitized)){
                    error = "Enter a valid email. (e.g., jdoe@email.com)";
                }
                break;
            case "subject":
                if (!sanitized){
                    error = `A subject is required!`;
                }
                break;
            case "message":
                if (!sanitized){
                    error = `A message is required!`;
                } else if (sanitized.length < 5){
                    error = "Message must be at least 5 characters.";
                } else if (sanitized.length > 500){
                    error = "Message must be less than 500 characters.";
                } 

                sanitized = sanitized.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");

        }

        return error;
    };


    const handleChange = (newData: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = newData.target.value;
        const name = newData.target.name;
        setForm({...form, [name]: value});

        const errorMessage = validateFormFields(name as keyof FormFields, value);
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (Date.now() - lastSubmission < SUBMISSION_COOLDOWN){
            alert("Please wait at least 30 seconds before submitting another response.");
            return;
        }

        const newErrors: Partial<FormFields> = {};
        (Object.keys(form) as (keyof FormFields)[]).forEach((key) => {
            const errorMessage = validateFormFields(key, form[key]);
            if (errorMessage) newErrors[key] = errorMessage;
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0){
            return;
        }

        if (!executeRecaptcha) {
            alert("reCAPTCHA not ready yet.");
            return;
        }

        try {
            const token = await executeRecaptcha('Contact_Form');

            const res = await fetch("https://formspree.io/f/meolzygb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    "g-recaptcha-response": token,

                }),
            });

            if (res.ok) {
                setLastSubmission(Date.now());
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.log(error);
        } 
    };

    return (
        <>
            <div className="flex flex-col w-3/4 max-lg:w-full h-fit rounded-2xl p-4 border-4 border-blue-950 bg-zinc-300 dark:bg-zinc-300 drop-shadow-xl">
                <h4 className="flex justify-center items-center text-center text-2xl max-lg:text-xl font-semibold text-blue-800 underline px-4 py-4 pt-2">Connect Via Email</h4>
                <form 
                    id="emailForm" 
                    name="emailForm" 
                    onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-y-3">
                                {/* Name */}
                                <span>
                                    <label 
                                        htmlFor="name" 
                                        className="font-semibold text-zinc-800"
                                    >
                                        <span>Full Name</span>
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input 
                                        required 
                                        id="name" 
                                        name="name" 
                                        type="text" 
                                        placeholder="John Doe"
                                        value={form.name}
                                        onChange={handleChange} 
                                        className={`bg-contact-input rounded-full w-full px-2 lg:px-4 lg:py-1 shadow-sm focus:ring-2 ${errors.name ? "focus:ring-red-500 border-2  border-red-500" : "focus:outline-none focus:ring-cyan-500"}`}                                    
                                    />
                                    {errors.name && 
                                        <p className="text-red-500 text-sm font-semibold mt-1 ml-2">{errors.name}</p>
                                    }
                                </span>

                                    
                            {/* Email Address */}
                            <span>
                                <label 
                                    htmlFor="email" 
                                    className="font-semibold dark:text-zinc-800"
                                >
                                    <span>Email</span>
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <input 
                                    required 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="jdoe@email.com"
                                    value={form.email}
                                    onChange={handleChange} 
                                    className={`bg-contact-input rounded-full w-full px-2 lg:px-4 lg:py-1 shadow-sm focus:ring-2 ${errors.email ? "focus:ring-red-500 border-2  border-red-500" : "focus:outline-none focus:ring-cyan-500"}`}
                                />
                                {errors.email && 
                                    <p className="text-red-500 text-sm font-semibold mt-1 ml-2">{errors.email}</p>
                                }
                            </span>
                        

                            {/* Subject Line */}
                            <span className="flex flex-col">
                                <label 
                                    htmlFor="subject" 
                                    className="font-semibold dark:text-zinc-800"
                                >
                                    <span>Subject</span>
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <select
                                    required 
                                    id="subject" 
                                    name="subject" 
                                    value={form.subject}
                                    onChange={handleChange} 
                                    className="bg-contact-input rounded-full px-2 lg:px-4 lg:py-1"
                                    >
                                        <option disabled value="">Select a Subject</option>
                                        {SELECT_OPTIONS.map((option: string, index: number) => (
                                            <option 
                                                key={index} 
                                                value={option}
                                                >
                                                    {option}
                                                </option>
                                        ))}
                                </select>
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </span>
                        
                            {/* Message */}
                            <span>
                                <label 
                                    htmlFor="message" 
                                    className="font-semibold dark:text-zinc-800"
                                >
                                    <span>Message</span>
                                    <span className="text-red-500 ml-1">*</span>
                                </label>
                                <div className="relative">
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        placeholder="Enter Your Brief Message..."
                                        value={form.message}
                                        onChange={handleChange} 
                                        className={`bg-contact-input rounded-lg w-full px-2 py-2 placeholder-gray-400 min-h-50 h-62.5 max-lg:h-87.5 lg:max-h-75 shadow-sm focus:ring-2 ${errors.message ? "focus:ring-red-500 border-2  border-red-500" : "focus:outline-none focus:ring-cyan-500"}`}
                                    />
                                    <div className={`absolute bottom-2 right-4 text-xs pointer-events-none ${getCharacterCounterColor()} rounded-full px-1 py-0.5`}>
                                        <p className="text-black font-semibold">
                                            ({form.message.length}/{MAX_MESSAGE_LENGTH})
                                        </p>
                                    </div>
                                </div>
                                <span className="flex items-center justify-between">
                                    <div className="flex justify-start">
                                        {errors.message && 
                                            <p className="text-red-500 text-sm font-semibold mt-1 ml-2">{errors.message}</p>
                                        }
                                    </div>
                                </span>
                                
                            </span>
                        </div>
                    <div className="flex items-center justify-center w-full pt-6">
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="bg-green-500 rounded-full w-full px-3 py-1"
                            >
                            <span className="flex flex-row justify-center items-center space-x-2">
                                <IoIosSend className="w-5 h-5"/>
                                <p>Send Message</p>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;