# opencode-autoask

An [OpenCode](https://opencode.ai) plugin that automatically prompts the LLM to offer follow-up options after every response.

After each assistant message, the LLM is instructed to call the `question` tool with a brief summary and 3–4 next-step suggestions, so the user can quickly pick what to do next rather than typing from scratch.

## How it works

The plugin appends a `<system_reminder>` to the last user message on every chat turn. This reinforces the instruction at the point of use, making it more reliable than putting it only in the system prompt.

```
After delivering a response, ALWAYS use the 'question' tool before ending your
response. This helps the user quickly decide on next steps.
question[0].question: "Summary: <Summary of message in 10 words>. What shall we do next?"
question[0].options: <3-4 suggestions on next steps>
```

## Install

Add to your `opencode.jsonc`:

```jsonc
{
    "plugin": ["@rstacruz/opencode-autoask@latest"]
}
```

No other configuration needed.

## Requirements

- [OpenCode](https://opencode.ai) with plugin support (`@opencode-ai/plugin >= 0.13.7`)

## License

MIT
