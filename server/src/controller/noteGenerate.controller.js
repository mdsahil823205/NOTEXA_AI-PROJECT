const notesModel = require("../models/notes.model");
const UserModel = require("../models/user.model");
const generateGeminiResponse = require("../services/gemini.services");
const buildPrompt = require("../utils/promptBuilder");

// ===== AI ke response se Markdown (```json) hatane ke liye function =====
const cleanAIResponse = (text) => {
    return text
        .replace(/```json/g, "") // Agar AI ne code block use kiya hai toh JSON tag hataiyenge
        .replace(/```/g, "") // replace se Baki bacha hua backticks hataiyenge
        .trim(); // trim se Faltu ki spaces saaf karenge
};

// ===== yaha pe  Sirf JSON wala part nikalne ke liye function (Agar AI extra text likh de) =====
const extractJSON = (text) => {
    const firstBrace = text.indexOf("{"); // indexOf se Pehla bracket dhoondenge
    const lastBrace = text.lastIndexOf("}"); //lastIndexOf Akhiri bracket dhoondenge
    if (firstBrace === -1 || lastBrace === -1) return null; // Agar brackets nahi mile toh fail
    return text.slice(firstBrace, lastBrace + 1); // slice method  Beech ka sara JSON nikal denge
};

const noteGenerateController = async (req, res) => {
    try {
        const { topic, classLevel, examType, revisionMode } = req.body;

        // Topic hona zaroori hai, varna AI kya generate karega?
        if (!topic) {
            return res.status(400).json({
                message: "Topic is required",
            });
        }

        // Token se mili userId se user dhoondenga (Auth check)
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        // Check karenge ki user ke paas (credits) hain ya nahi
        if (user.credits < 10) {
            return res.status(400).json({
                message: "Not enough credits",
            });
        }

        // Topic aur level ke hisaab se AI ke liye ek badiya sa prompt banaiyenge jisme yeh sab jaaiyega
        const prompt = buildPrompt({
            topic,
            classLevel,
            examType,
            revisionMode,
        });

        // Gemini AI ko prompt bhejenge  aur raw response ka intezar karo
        const aiRawResponse = await generateGeminiResponse(prompt);

        let aiResponse;

        try {
            // jo bhi Raw response aayega usko  clean karenge aur JSON nikalenge
            const cleanedText = cleanAIResponse(aiRawResponse);
            const jsonString = extractJSON(cleanedText);

            if (!jsonString) {
                throw new Error("No valid JSON found");
            }

            // String ko JavaScript Object mein badlo
            aiResponse = JSON.parse(jsonString);
        } catch (err) {
            console.log("AI JSON Parsing Failed:", err.message);
            return res.status(500).json({
                message: "AI returned invalid JSON format",
            });
        }

        // Database mein naya Note save karo
        const notes = await notesModel.create({
            user: user._id,
            topic,
            classLevel,
            examType,
            revisionMode,
            content: aiResponse, // AI wala pura data yaha save hoga
        });

        // User ke credits 10 kam karo aur notes list mein ID add karo
        user.credits -= 10;
        user.notes.push(notes._id);
        await user.save(); // Database update

        return res.status(200).json({
            success: true,
            message: "Notes generated successfully",
            notes,
        });
    } catch (error) {
        console.log("Error inside noteGenerateController:", error.message);
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

module.exports = noteGenerateController;
