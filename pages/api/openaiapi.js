import { Configuration, OpenAIApi } from "openai";

const openai = async (req, res) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });

    const openaiApi = new OpenAIApi(configuration);
    const { prompt } = JSON.parse(req.body);

    const openaiRes = await openaiApi.createCompletion({
      model: "gpt-3.5-turbo",
      prompt,
    });

    res.status(200).json(openaiRes.data);
  } catch (error) {
    console.error("Error processing OpenAI request:", error);
    res.status(500).json({
      error: error + "An error occurred while processing the request.",
    });
  }
};

export default openai;
