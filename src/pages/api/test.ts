import {NextFetchEvent, NextRequest, NextResponse} from "next/server";
import {NextApiRequest, NextApiResponse} from "next";

type NextMiddlewareResult = NextResponse | Response | null | undefined

type NextMiddleware = (
    req: NextRequest,
    event: NextFetchEvent
) => Promise<NextMiddlewareResult> | NextMiddlewareResult

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    res.status(200).json({name:'John doe'})
}