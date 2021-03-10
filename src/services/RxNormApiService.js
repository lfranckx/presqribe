const RxApiService = {
    searchByTerm(term) {
        console.log('GET', term);
        return fetch(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${term}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res) =>
            !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        ) 
    }
}

export default RxApiService;