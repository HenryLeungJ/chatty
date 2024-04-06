"use client"
import Button from "@mui/material/Button";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {useState} from "react";
import Link from "next/link"
import Image from "next/image";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    function handleCopied() {
        setCopied(true);
        console.log(copied);
        new Promise(()=> {
            setTimeout(()=> {
                setCopied(false);
            }, 4000)
        })
    }

    const [copied2, setCopied2] = useState(false);

    function handleCopied2() {
        setCopied2(true);
        console.log(copied);
        new Promise(()=> {
            setTimeout(()=> {
                setCopied2(false);
            }, 4000)
        })
    }
    return (
      <div className="py-24 sm:py-32 h-full w-full">
        <div className="mx-2 h-full max-w-7xl grid place-content-center">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
            Get To Know The Creator:
          </h2>
          <p className="text-center font-semi my-4 leading-8 text-gray-900">Life is but a series of experiences</p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 place-content-center items-center gap-x-5 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-5 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="grid place-items-center rounded-3xl">
                <Image
                    className="rounded-md col-span-2 object-contain lg:col-span-1 my-1"
                    src="/google.jpg"
                    alt="Gmail"
                    width={50}
                    height={50}
                />
                    <Button variant="text" onClick={async()=>{await navigator.clipboard.writeText("HenryLeungJ@gmail.com"); handleCopied()}}>{copied ? "Copied!" : "Email"}</Button>
                
            </div>
            <div className="grid place-items-center">
                <Link href="https://www.linkedin.com/in/henry-leung-834888243/">
                    <Image
                        className="col-span-2 max-h-14 pt-2 w-full object-contain lg:col-span-1"
                        src="/linkedin.png"
                        alt="Linked-in"
                        width={33}
                        height={33}
                    />
                </Link>
                <Button variant="text" className="pt-2.5" onClick={async()=>{await navigator.clipboard.writeText("https://www.linkedin.com/in/henry-leung-834888243/"), handleCopied2()}}>{copied2 ? "Copied!" : "LinkedIn"}</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  