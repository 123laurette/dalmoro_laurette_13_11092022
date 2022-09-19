const getData = async () => {
    
    const response = await fetch (`http://localhost:3000/api/v1/user`);
    console.log (response)

    const dataFetch = await response.json();
    console.log(dataFetch)
}

export default getData

