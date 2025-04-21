type CongressmenData =     {
    "bioguideId": string,
    "depiction": {
      "attribution": string,
      "imageUrl": string
    },
    "district": number,
    "name": string,
    "partyName": string,
    "state": string,
    "terms": {
      "item": [
        {
          "chamber": string,
          "startYear": number
        }
      ]
    },
    "updateDate":string,
    "url": string
  }
  
  
  export type CongressmenList = {
    "members":[
      CongressmenData
    ]
  }
  

export class Congress{
    GOV_API_TOKEN:string;
    constructor(){
        const token = process.env.GOV_API_TOKEN;
        if (!token) throw new Error("GOV_API_TOKEN is not set");
        this.GOV_API_TOKEN =token;
    }

    async get_current_congress_members(): Promise<CongressmenList> {

        const res = await fetch(`https://api.congress.gov/v3/member/?currentMember=true&api_key=${this.GOV_API_TOKEN}`)
    
        const data: CongressmenList = await res.json()

        console.log(data["members"].length)

        return data

    }

    


}