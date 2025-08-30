"use client"

import { useState } from "react";
import StyledButton from "./StyledButton";
import { IoIosSend } from "react-icons/io";

interface FormFields {
    firstName: string,
    lastName: string,
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

    const [form, setForm] = useState<FormFields>({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (newData: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = newData.target.value;
        const name = newData.target.name;
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            console.log(form);
            setForm({firstName: "", lastName: "", email: "", subject: "", message: ""});
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
                        <div className="flex flex-col gap-y-2">
                            <div className="flex max-sm:flex-col lg:flex-row max-sm:gap-y-2 lg:gap-x-6">
                                {/* First Name */}
                                <span>
                                    <label 
                                        htmlFor="firstName" 
                                        className="font-semibold dark:text-zinc-800"
                                    >
                                        <span>Your First Name</span>
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input 
                                        required 
                                        id="firstName" 
                                        name="firstName" 
                                        type="text" 
                                        placeholder="Your First Name"
                                        value={form.firstName}
                                        onChange={handleChange} 
                                        className="rounded-full w-full px-2 lg:px-4 lg:py-1"
                                    />
                                </span>

                                {/* Last Name */}
                                <span>
                                    <label 
                                        htmlFor="lastName" 
                                        className="font-semibold dark:text-zinc-800"
                                    >
                                        <span>Your Last Name</span>
                                        <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input 
                                        required 
                                        id="lastName" 
                                        name="lastName" 
                                        type="text" 
                                        placeholder="Your Last Name"
                                        value={form.lastName}
                                        onChange={handleChange} 
                                        className="rounded-full w-full px-2 lg:px-4 lg:py-1"
                                    />
                                </span>
                            </div>
                                    
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
                                    placeholder="Your Email Address"
                                    value={form.email}
                                    onChange={handleChange} 
                                    className="rounded-full w-full px-2 lg:px-4 lg:py-1"
                                />
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
                                    className="rounded-full px-2 lg:px-4 lg:py-1"
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
                                <textarea
                                    required
                                    id="message"
                                    name="message"
                                    placeholder="Enter Your Brief Message..."
                                    value={form.message}
                                    onChange={handleChange} 
                                    className="w-full px-2 py-2 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-[200px] h-[250px] max-lg:h-[350px] lg:max-h-[300px]"
                                />
                            </span>
                        </div>
                    <div className="flex items-center justify-center pt-6">
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="bg-green-500 rounded-full px-3 py-1"
                            >
                            <span className="flex flex-row justify-center items-center space-x-2">
                                <IoIosSend className="w-5 h-5"/>
                                <p>Send Message!</p>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ContactForm;