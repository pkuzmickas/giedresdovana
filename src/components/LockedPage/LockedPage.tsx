"use client";

import { useEffect, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { REGEXP_ONLY_CHARS } from "input-otp";

type Props = {
  unlock: () => void;
};

const sha256 = async (message: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

const SHA = "de81bf828b2fb07bb0529b1ae77559a8de6b0879d41293326d87ac30a715d802";

export const LockedPage = ({ unlock }: Props) => {
  const inputotp = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputotp.current?.focus();
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 pb-24">
      <div className="text-4xl font-semibold text-white">SLAPTAŽODIS?</div>
      <div className="flex">
        <img src="christmas-gift.svg" width={64} />
        <img src="lock.svg" width={64} />
        <img src="christmas-gift.svg" width={64} />
      </div>
      <div>
        <InputOTP
          ref={inputotp}
          maxLength={11}
          pattern={REGEXP_ONLY_CHARS}
          onChange={async (e) => {
            if(e?.length === 11 && SHA === await sha256(e)) unlock();
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
            <InputOTPSlot index={10} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};
