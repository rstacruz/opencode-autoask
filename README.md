# opencode-autoask

An [OpenCode](https://opencode.ai) plugin that automatically prompts the LLM to offer follow-up options after every response.

After each assistant message, the LLM is instructed to call the `question` tool with a brief summary and 3–4 next-step suggestions.

## Why

For providers that charge per request (GitHub Copilot) this prevents subsequent messages from consuming credits.

## Install

Add to your `opencode.jsonc`:

```jsonc
{
    "plugin": ["@rstacruz/opencode-autoask@latest"],
}
```

No other configuration needed.

## License

MIT
