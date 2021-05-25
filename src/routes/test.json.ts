import type { Locals } from "$lib/types";
import type { RequestHandler } from "@sveltejs/kit";
import cookie from 'cookie';


export const post: RequestHandler<Locals, FormData> = async () => {
    const cookieMonster = cookie.serialize('test', '1234', {
        maxAge: 3600,
        secure: true,
        httpOnly: true,
    });
    return {
        status: 200,
        headers: {
            'Set-Cookie': cookieMonster
        },
        body: {
            message: 'Cookie Monster'
        }
    }
};
