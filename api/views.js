import { get, put } from "@vercel/blob";

const FILE_NAME = "views.json";
const STARTING_COUNT = 3656;

async function getCount() {
    try {
        const result = await get(FILE_NAME, {
            access: "private",
            useCache: false
        });

        if (!result) {
            return STARTING_COUNT;
        }

        const response = await fetch(result.downloadUrl);
        const data = await response.json();

        const count = Number(data.count);

        if (!Number.isInteger(count) || count < 0) {
            return STARTING_COUNT;
        }

        return count;
    } catch {
        return STARTING_COUNT;
    }
}

async function saveCount(count) {
    await put(
        FILE_NAME,
        JSON.stringify({ count }),
        {
            access: "private",
            allowOverwrite: true,
            contentType: "application/json",
            cacheControlMaxAge: 1
        }
    );
}

export async function GET() {
    const count = await getCount();

    return Response.json({
        count
    });
}

export async function POST() {
    const currentCount = await getCount();
    const newCount = currentCount + 1;

    await saveCount(newCount);

    return Response.json({
        count: newCount
    });
}