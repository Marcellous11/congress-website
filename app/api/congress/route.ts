
 import { NextResponse } from "next/server"

import { Congress} from "@/app/classes/congress";

export const runtime = 'edge';




export async function GET() {

  const congresAPI = new Congress();

  const res =await  congresAPI.get_current_congress_members()

  return NextResponse.json(res);
}
