const RxApiService = {
    searchByTerm(term) {
        return fetch(`https://rxnav.nlm.nih.gov/REST/drugs?name=${term}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        ) 
    }
}

export default RxApiService;