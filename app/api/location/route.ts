import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
	const details = geolocation(request);
	console.log(details);
	return NextResponse.json(details);
}