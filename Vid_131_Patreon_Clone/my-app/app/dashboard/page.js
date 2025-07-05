"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import Dashboard from '@/componets/Dashboard'

const DashboardPage = () => {
    return (
        <Dashboard/>
    )
}
export default DashboardPage


   