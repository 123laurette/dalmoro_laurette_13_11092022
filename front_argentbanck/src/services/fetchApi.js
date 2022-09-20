import user from "./ClassModelisation"

const getData = async () => {
    
    const response = await fetch ('http://localhost:3000/api/v1/');
    console.log (response)

    const dataFetch = await response.json();
    console.log(dataFetch)

    return new user(dataFetch.data)

}

export default getData

