export async function GET(){
    return Response.json({
        success: true,
        service:"Boat Warranty API is running",
        version: "1.0.0",
        timestamp:new Date().toISOString(),
    })
}