import { sql } from "@vercel/postgres"
import { json } from "stream/consumers"

export const SqlData = async () => {
    const data = await sql`SELECT * FROM customers`
    
    return (
        <p>{JSON.stringify(data)}</p>
    )
}