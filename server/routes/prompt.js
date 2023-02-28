const express = require('express');
const {readFile, appendFile, writeFile} = require('fs').promises;
const {Configuration, OpenAIApi} = require('openai');
const {OpenAI} = require("../secrets/OpenAI");

const promptRouter = express.Router();

const config = new Configuration({
    apiKey: OpenAI.apiKey,
});

const openai = new OpenAIApi(config);

const runPrompt = async (prompt) => {
    const model = "text-davinci-003";
    // const prompt = "Opowiedz żart o cyganach";

    const response = await openai.createCompletion({
        model: model,
        prompt: prompt,
        max_tokens: 250,
    });

    return {"prompt": response.data.choices[0].text};
}

const getPromptFromFile = async () => {
    const fileContent = await readFile('text.json', "utf-8");

    return fileContent;
}

promptRouter

    .post('/api', async (req, res) => {
        // const fileContent = await getPromptFromFile();

        const question = req.body.question;

        const openaiAnswer = await runPrompt(question);

        res.send(openaiAnswer);
    })

    .get('/openai', async(req, res) => {
        const openaiAnswer = await runPrompt();

        await writeFile('openai-answers.txt', `${openaiAnswer.prompt}\n`, 'utf8');

        res.send(openaiAnswer);
    })

module.exports = {
    promptRouter,
}