import { NextResponse } from "next/server";
import { getDashboardStats } from "../../../../services/dashboard.service";
import logger from "@/lib/logger";

export async function GET() {
    try {
        const stats = await getDashboardStats();

        return NextResponse.json(
            {
                success: true,
                data: stats
            },
            {
                status: 200
            }
        );
    } catch (error) {
        logger.error({ error }, "Failed to fetch dashboard statistics");

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch dashboard statistics"
            },
            {
                status: 500
            }
        );
    }
}