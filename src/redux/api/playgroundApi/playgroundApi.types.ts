export type TComposeFromPlaygroundRequired = { output_length: "low" | "medium" | "high", title: string }
export type TComposeFromPlaygroundOptional = {
    description: string
    audience: string
    tone: string
    keywords: string
    content: string
};
export type TComposeFromPlayground =
    TComposeFromPlaygroundOptional
    & TComposeFromPlaygroundRequired

export type TComposeFromPlaygroundResponse = {
    choices: TComposeFromPlaygroundChoice[]
    created: number
    id: string
    model: string
    object: string
    usage: TComposeFromPlaygroundUsage
}

export interface TComposeFromPlaygroundChoice {
    finish_reason: string
    index: number
    logprobs: any
    text: string
}

export interface TComposeFromPlaygroundUsage {
    completion_tokens: number
    prompt_tokens: number
    total_tokens: number
}