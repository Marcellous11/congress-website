
"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardHeader } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";
import React from "react";
import { useEffect, useState } from "react";


type CongressResponse = {
  // Define the expected structure from the API
  results: any[]
}


export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/")
        const resData = await res.json()
        setData(resData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
    }
  , [])

  console.log(data)
  const fakeData = {
      members: [
        {
          id:1,
          bioguideId: 'H001089',
          depiction: [Object],
          district: null,
          name: 'Hawley, Josh',
          partyName: 'Republican',
          state: 'Missouri',
          terms: [Object],
          updateDate: '2025-04-12T12:42:18Z',
          url: 'https://api.congress.gov/v3/member/H001089?format=json'
        },
        {
          id:2,
          bioguideId: 'G000551',
          depiction: [Object],
          district: 3,
          name: 'Grijalva, Raúl M.',
          partyName: 'Democratic',
          state: 'Arizona',
          terms: [Object],
          updateDate: '2025-03-28T15:05:08Z',
          url: 'https://api.congress.gov/v3/member/G000551?format=json'
        }
      ]}

  useEffect(()=>{
    
    // *** Going to make gov calls through cloudflare ***
  },[])



  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-20">
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuLink href="/" >Home</NavigationMenuLink>
        <NavigationMenuLink href="/congressmen" >Congressmen</NavigationMenuLink>
        <NavigationMenuLink href="/state" >State</NavigationMenuLink>
        <NavigationMenuLink href="/payments" >Payments</NavigationMenuLink>
      </NavigationMenu>

      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Congress Website</h1>
        <p className="text-gray-600 mt-4">Explore the data and insights about our team members.</p>
      </header>

      <main className="w-full max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Salary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeData["members"].map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.partyName}</TableCell>
                <TableCell>{row.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>

      <footer className="text-center mt-12 text-gray-600">
        <p>&copy; 2025 Congress Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

