"use server"

class CongressAPI {
    private apiKey: string;

    constructor() {
        console.log(process.env)
        this.apiKey = process.env.GOV_API_TOKEN || (() => { throw new Error('GOV_API_TOKEN is not defined'); })();
    }

    private async makeRequest(endpoint: string, method: string = 'GET', body?: any) {
        try {
            // Append the API key as a query parameter
            const url = new URL(endpoint);
            url.searchParams.append('api_key', this.apiKey);

            const response = await fetch(url.toString(), {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : undefined,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error making API request:', error);
            throw error;
        }
    }

    public async fetchCongressMember() {
        const endpoint = 'https://api.congress.gov/v3/member/congress/117';
        return await this.makeRequest(endpoint);
    }
}

export default CongressAPI;