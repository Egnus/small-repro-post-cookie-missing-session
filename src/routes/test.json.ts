import type { Locals } from "$lib/types";
import type { RequestHandler } from "@sveltejs/kit";
import cookie from 'cookie';
import { getSession } from "../hooks";


export const post: RequestHandler<Locals, FormData> = async (request) => {
    const cookieMonster = cookie.serialize('test', '1234', {
        maxAge: 3600,
        secure: true,
        httpOnly: true,
    });
    const session = getSession(request);
    session.test = '1234';
    return {
        status: 200,
        headers: {
            'Set-Cookie': cookieMonster
        },
        body: session
    }
};
