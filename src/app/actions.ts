"use server";

export async function sendContactMessage(formData: any, locale: string) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

  try {
    const response = await fetch(`${API_URL}/website/contact-us`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Access-Token": API_TOKEN || "",
        "Accept-Language": locale,
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Something went wrong",
      };
    }

    return { success: true, message: result.message || "Success" };
  } catch (error) {
    console.error("Server action error:", error);
    return { success: false, message: "Internal server error" };
  }
}
