import { NextResponse } from "next/server";
import net from 'net'

export async function GET(_request: any) {
  let client = new net.Socket()
  client.connect(2000, '127.0.0.1', () => {client.write('hello man')})
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}