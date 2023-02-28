const express = require('express');
const {readFile, appendFile, writeFile} = require('fs').promises;
const {Configuration, OpenAIApi} = require('openai');

const promptRouter = express.Router();

const config = new Configuration({
    apiKey: 'API-KEY',
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
    const model = "text-davinci-003";
    const prompt = "Opowiedz żart o cyganach";

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

    .get('/api', async (req, res) => {
        const fileContent = await getPromptFromFile();

        const question = req.params.question;

        res.send(question);
    })

    .get('/openai', async(req, res) => {
        const openaiAnswer = await runPrompt();

        await writeFile('openai-answers.txt', `${openaiAnswer.prompt}\n`, 'utf8');

        res.send(openaiAnswer);
    })

module.exports = {
    promptRouter,
}