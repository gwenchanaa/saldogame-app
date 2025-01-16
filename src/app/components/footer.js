'use client'

import { facebookPath, instagramPath, linkedinPath, tiktokPath, youtubePath, githubPath } from "./svgPaths";
import Link from 'next/link';
import Image from "next/image";

export default function FooterComponent() {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row gap-8 py-20">
                <div className="w-[360px] flex flex-col gap-6">
                    <Image src="/Logo.png" width="145" height="18" alt="Logo"/>
                    <p className="text-[#6974AA] ">
                        #1 Top Up Game Online dan Voucher Terpercaya
                    </p>
                    <div className="flex gap-[18px] text-[#B0BBE5]">
                        <button onClick={() => alert("LinkedIn Button Clicked")}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={linkedinPath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("Facebook Button Clicked")}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={facebookPath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("Instagram Button Clicked")}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={instagramPath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("LinkedIn Button Clicked")}>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={youtubePath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("Github Button Clicked")}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={githubPath}/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-[285.3px]">
                    <h2 className="text-[#FA3A95] font-semibold">
                        Pintasan
                    </h2>
                    <div className="flex flex-col gap-[21px] pt-[21px] w-auto">
                        <Link href="/pages/aboutUs" className="text-[#0F172A] font-medium">
                            Tentang Kami
                        </Link>
                        <Link href="" className="text-[#0F172A] font-medium">
                            FAQ
                        </Link>
                        <Link href="" className="text-[#0F172A] font-medium">
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
                <div className="w-[285.3px]">
                    <h2 className="text-[#FA3A95] font-semibold">
                        Lainnya
                    </h2>
                    <div className="flex flex-col gap-[21px] pt-[21px] w-auto">
                        <Link href="/pages/profile" className="text-[#0F172A] font-medium">
                            Profil Saya
                        </Link>
                        <Link href="/pages/transaction" className="text-[#0F172A] font-medium">
                            Transaksi
                        </Link>
                        <Link href="" className="text-[#0F172A] font-medium">
                            Blog
                        </Link>
                    </div>
                </div>
                <div className="w-[285.3px]">
                    <h2 className="text-[#FA3A95] font-semibold">
                        Temukan Kami di
                    </h2>
                    <div className="flex flex-row pt-[21px] gap-6">
                        <button onClick={() => alert("Facebook Button Clicked")} className="flex justify-center items-center h-10 w-10 bg-[#FA3A95] rounded-full text-white"
                        style={{ boxShadow: '14px 14px 28px lightgrey' }}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={facebookPath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("Instagram Button Clicked")} className="flex justify-center items-center h-10 w-10 bg-[#FA3A95] rounded-full text-white"
                        style={{ boxShadow: '14px 14px 28px lightgrey' }}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={instagramPath}/>
                            </svg>
                        </button>
                        <button onClick={() => alert("TikTok Button Clicked")} className="flex justify-center items-center h-10 w-10 bg-[#FA3A95] rounded-full text-white"
                        style={{ boxShadow: '14px 14px 28px lightgrey' }}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={tiktokPath}/>
                            </svg>

                        </button>
                        <button onClick={() => alert("Youtube Button Clicked")} className="flex justify-center items-center h-10 w-10 bg-[#FA3A95] rounded-full text-white shadow-xl"
                        style={{ boxShadow: '14px 14px 28px lightgrey' }}>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d={youtubePath}/>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-[#E7ECFA] py-6 font-semibold text-[#0F172A]">
                Copyright ©2024 Saldogame, All rights Reserved
            </div>
        </div>
    );
}