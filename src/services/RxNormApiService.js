const RxApiService = {
    searchByTerm(term) {
        console.log('term', term);
        // return fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?drugs?name=${term}`, {
        //     method: 'GET',
        //     headers: {
        //         'content-type': 'application-json'
        //     }
        // })
        return fetch(`https://rxnav.nlm.nih.gov/REST/rxcui.json?idtype=NDC&id=11523-7020-1`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res) =>
            console.log(res)
            // !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        ) 
        // .then((response) => response.json())
    }
}

export default RxApiService;