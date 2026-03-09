const buildPrompt = ({
  topic,
  classLevel,
  examType,
  revisionMode
}) => {
  return `
You are a STRICT JSON generator for an exam preparation system.

==============================
ABSOLUTE OUTPUT RULES
==============================
1. Output MUST be valid JSON.
2. It will be parsed using JSON.parse().
3. Do NOT output anything except JSON.
4. Use ONLY double quotes ".
5. No comments.
6. No trailing commas.
7. Escape line breaks using \\n.
8. Do NOT add explanations.
9. Do NOT add extra keys.
10. Do NOT remove required keys.
11. If unsure, return empty arrays instead of breaking JSON.

==============================
TASK
==============================
Convert the given topic into structured exam-oriented notes.

INPUT:
Topic: ${topic}
Class Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "General"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}

==============================
CONTENT RULES
==============================
- Simple, exam-focused language.
- Markdown formatting allowed inside "notes".
- Use headings and bullet points only.
- No storytelling.
- Maximum 800 words.

==============================
SUBTOPIC RULES (IMPORTANT)
==============================
Create EXACTLY THREE categories:

1. "⭐⭐⭐ Very Important"
2. "⭐⭐ Important"
3. "⭐ Frequently Asked"

Rules:
- All three categories MUST exist.
- None can be empty.
- DO NOT include stars inside array items.
- DO NOT include the words Very Important, Important, Frequently Asked inside array items.
- Array items must contain ONLY topic names.
- Stars and labels must appear ONLY in category headings (keys).

Correct Example:

"subTopics": {
  "⭐⭐⭐ Very Important": ["DBMS Architecture", "Normalization"],
  "⭐⭐ Important": ["Data Models", "Keys"],
  "⭐ Frequently Asked": ["Advantages of DBMS"]
}

==============================
REVISION MODE RULES
==============================
If Revision Mode is ON:
- One-line bullet points only.
- Definitions, formulas, keywords only.
- No explanations.

If Revision Mode is OFF:
Each major concept must include:
- Definition
- Short explanation (2-4 lines)
- Example (if applicable)

==============================
STRICT JSON STRUCTURE
==============================

{
  "subTopics": {
    "⭐⭐⭐ Very Important": [],
    "⭐⭐ Important": [],
    "⭐ Frequently Asked": []
  },
  "importance": "⭐⭐⭐ Very Important | ⭐⭐ Important | ⭐ Frequently Asked",
  "notes": "string",
  "revisionPoints": [],
  "questions": {
    "short": [],
    "long": [],
    "diagram": ""
  },
  "diagram": {
    "type": "flowchart",
    "data": ""
  },
  "charts": []
}

RETURN ONLY VALID JSON.
`;
};
module.exports = buildPrompt