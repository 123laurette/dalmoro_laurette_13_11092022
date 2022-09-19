const url = `http://localhost:3000/api/v1/user`;

console.log (url)

const getData = async (id) => {
    
    let urlDemande = url+ `/${id}/`;
    console.log (urlDemande)

    const data = await fetch(urlDemande);
    console.log (data)

    const dataFetch = await data.json();
    console.log(dataFetch)
}

export default getData

