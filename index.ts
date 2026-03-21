import type { Plugin } from "@opencode-ai/plugin"

const PROMPT = `<system_reminder>
After delivering a response, ALWAYS use the 'question' tool before ending your
response. This helps the user quickly decide on next steps.
question[0].question: "Summary: <Summary of message in 10 words>. What shall we do next?"
question[0].options: <3-4 suggestions on next steps>
</system_reminder>`

const plugin: Plugin = async (ctx) => {
    return {
        "experimental.chat.messages.transform": async (_input, output) => {
            for (let i = output.messages.length - 1; i >= 0; i--) {
                const msg = output.messages[i]
                if (msg.info.role !== "user") continue

                // Skip subagent sessions — they don't need follow-up questions
                try {
                    const session = await ctx.client.session.get({ path: { id: msg.info.sessionID } })
                    if (session.data?.parentID) return
                } catch {
                    // if session lookup fails, proceed as normal
                }

                for (let j = msg.parts.length - 1; j >= 0; j--) {
                    const part = msg.parts[j]
                    if (part.type !== "text") continue
                    part.text = part.text + "\n\n" + PROMPT
                    return
                }
            }
        },
    }
}

export default plugin
