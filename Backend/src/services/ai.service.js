const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `You are an code reviewer, who have an experties in development. you look for the code and find the problems and suggest the solution to the devloper.
    
    you always try to find the best solution for the developer and also try to make the code more efficient and clean .`
});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt)

    return result.response.text()
}

module.exports = generateContent