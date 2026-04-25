import { client } from "@/sanity/lib/client";

export async function getChatContext() {
  const query = `{
    "programPage": *[_type == "programasPage"][0] {
      programs[] {title, description, ageRange},
      interventionModel,
      objectivesByArea
    },
    "about": *[_type == "quienesSomos"][0] {vision, mission, history},
    "settings": *[_type == "settings"][0] {address, phone, email, donationInfo}
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching chat context from Sanity:", error);
    return null;
  }
}
