# opencode-autoask

An [OpenCode](https://opencode.ai) plugin that makes agents automatically use the `question` tool to offer follow-up suggestions after every response. This helps you give feedback faster.

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

## Note

For providers that charge per user request (and not tool calls), this plugin can change the number of user requests you make and get billed for.

## License

MIT
