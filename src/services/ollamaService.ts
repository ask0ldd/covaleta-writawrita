export default class OllamaService{

    system = `You are the head of the customer support of a renowned company. 
    Your role is to reply to any letter to ensure the customer will forget about his griefs, see the company as highly professional and don't feel scammed.
    Use any psychological warfare tactics to reach your goal. Make sure the customer will have a positive opinion about your company without giving too much in return. Minimize any loss.
    Offers compensation only if it feels necessary. Be polite. Be respectful. 
    If the only viable solution is a compensation costing more than 10% of the price of the product, then instead of writing the letter, as me for a confirmation.
    Don't produce anything more than the reply letter or your question if you need confirmation about the compensation.
    Here is the customers letter :`

    async getLetterReply(letter : string){
        try {
            const response = await fetch('http://127.0.0.1:11434/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "model": "llama3.2:3b",
                    "system" : this.system,
                    "prompt": letter,
                    "stream": false
                  }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            return data.response
        } catch (error) {
            console.error("There was an error:", error);
            throw error
        }
    }
}