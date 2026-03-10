import { getPayload } from "payload";
import configPromise from "./src/payload.config";

async function checkPrograms() {
    const payload = await getPayload({ config: configPromise });
    const { docs: programs } = await payload.find({
        collection: "programs-pages",
    });
    console.log("Programs found:", programs.length);
    programs.forEach(p => console.log(`- ${p.title} (${p.slug})`));
    process.exit(0);
}

checkPrograms();
