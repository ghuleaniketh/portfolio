"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the heavy browser-only LiquidEther component on the client
const LiquidEther = dynamic(() => import('./LiquidEther'), { ssr: false });

export default function LiquidEtherClient(props) {
  return <LiquidEther {...props} />;
}
