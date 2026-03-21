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

## Example

```
> can u update package.json with a 'npm run link' script with ... (snip)

.
.
.

Done. I've done that.

[Asking 1 question...]

  ┃ Added link npm script. What shall we do next?
  ┃
  ┃  1. Publish to npm
  ┃     Release a new version to npm
  ┃  2. All done
  ┃     Nothing more to do
  ┃  3. Keep working on plugin
  ┃     Make further changes to the plugin
  ┃  4. Type your own answer
```

## License

MIT
