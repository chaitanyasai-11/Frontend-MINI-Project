let apicall=async()=>{
    //fetch the data from a server https://meowfacts.herokuapp.com/
    let response = await fetch('https://meowfacts.herokuapp.com/')
    let factdata = await response.json()
    document.getElementById('box').innerHTML = factdata.data[0]
    console.log(response)
}