const RxApiService = {
    searchByTerm(term) {
        return fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${term}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(async (res) =>{
            // !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            try {
                const data = await res.json();
                return data;
            } catch(error) {
                throw new Error(error);
            }
        }); 
    }
}

export default RxApiService;