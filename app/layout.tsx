// app/layout.tsx — Javari Wine
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Wine | Javari by CR AudioViz AI',
  description: 'Wine cellar manager',
}
import AppShell from '@/components/AppShell'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, padding: 0 }}><AppShell appName="Javari Wine" appColor="#7c3aed" appEmoji="🍷" appDesc="Wine cellar manager">{children}</AppShell></body></html>)
}
