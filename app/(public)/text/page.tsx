'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import GetTheApp from "@/components/popup/getTheApp";
import { sendAppLink, validatePhoneNumber, validateCountryCode } from "@/lib/message";
import { getUrlForDevice } from "@/lib/device";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Text2 from "./text2";

export default function SignUpPage() {
      return (
        <Suspense>
          <Text2 />
        </Suspense>
      );
} 