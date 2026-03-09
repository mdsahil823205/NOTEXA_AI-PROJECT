const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const generateGeminiResponse = async (prompt) => {
  try {
    const response = await fetch(
      `${GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Gemini API Error Response:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Raw Gemini Text:", text);
    if (!text) {
      throw new Error("Failed to generate response");
    }

    // Remove markdown blocks
    text = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Extract only JSON part (extra safe)
    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error("Invalid JSON format from AI");
    }

    return text.substring(firstBrace, lastBrace + 1);
  } catch (error) {
    console.error("Gemini service error:", error);
    throw error;
  }
};

module.exports = generateGeminiResponse;
