
"use server"
 import { NextResponse } from "next/server"

type Congressmen =     {
  "bioguideId": string,
  "depiction": {
    "attribution": string,
    "imageUrl": string
  },
  "district": number,
  "name": string,
  "partyName": string,
  "state": string,
  "terms": {
    "item": [
      {
        "chamber": string,
        "startYear": number
      }
    ]
  },
  "updateDate":string,
  "url": string
}


type CongressmenList = {
  "members":[
    Congressmen
  ]
}

export async function GET() {

    const apiToken = process.env.GOV_API_TOKEN
    console.log(apiToken)

  const res = await fetch(`https://api.congress.gov/v3/member/congress/117?currentMember=false&api_key=${apiToken}`)

  const data: CongressmenList = await res.json()
  
  return NextResponse.json(data);
}
