import fs from 'fs/promises';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: "sk-proj-LFSVWCpcndbTTRpuuF3MT3BlbkFJfzDfV8jm41xQbceGiwcv" });


async function readAndCommentCode(filePath) {
    try {
        const code = await fs.readFile(filePath, 'utf8');
        const prompt = `Give me back this code with added comments within it as a response: ${code}.
        \n These are the requirements for the comments: 
        \n 1. Do not add comments if you think that the code is already well commented.
        \n 2. Do not comment on import statements.
        \n 3. A file can have only (lines of code divided by 10) comments
        \n 4. Comment only on major points that will help the user understand the code.
        \n 5. At the end of each comment added by you, you must add '- Added by ChatGPT'
        \n 6. Insert simple, short comments directly within the code.
        \n 7. Each comment should be under 90 characters.
        \n 8. Make the comments easy to understand for beginners.
        \n 9. You are allowed to write one comment for every 10 lines of code anywhere you decide in the code base.
        \n 
        \n Finally give me the response as if it is a functional code that I can copy and run directly.`;

        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant skilled in JavaScript." },
                { role: "user", content: prompt }
            ],
            model: "gpt-3.5-turbo",
        });

        const feedback = completion.choices[0].message.content.trim();
        return feedback; // This should now contain the code with integrated comments
    } catch (error) {
        console.error('Failed to read or comment code:', error);
        throw error;
    }
}

function extractCodeFromMarkdown(markdownText) {
    const codeRegex =  /```javascript\s+([\s\S]*?)```/;
    const match = markdownText.match(codeRegex);

    return match ? match[1] : 'No code block found.';
}

function writeCodeToFile(code, filePath) {
    fs.writeFile(filePath, code, (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
        } else {
            console.log(`Successfully wrote code to ${filePath}`);
        }
    });
}

async function main() {
    const filePath = 'Authentication.jsx';
    console.log("Running gpt analysis..");
    const commentedCode = await readAndCommentCode(filePath);
    console.log("Extracting code from the prompt...")
    const extractedCode = extractCodeFromMarkdown(commentedCode);
    if (extractedCode != "No code block found.") {
        writeCodeToFile(extractedCode, filePath);
        console.log("File updated successfully.")
    }
    else{
        console.log("Failed to extract the code from the prompt")
    }
}

main();