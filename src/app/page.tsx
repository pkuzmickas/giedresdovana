"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { useEffect, useRef } from "react";

export default function Home() {
  const inputotp = useRef(null);
  useEffect(() => {
    inputotp.current?.focus();
  }, []);
  return (
    <div className="font-[family-name:var(--font-geist-sans)] min-h-screen min-w-screen flex items-center justify-center bg-black">
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
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            onChange={(e) => console.log(e)}
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
    </div>
  );
}
