const nwlist=document.querySelector('#newmanufacture')
const button=document.querySelector('#btt')
const addnewcycle=async()=>{
    const data1=await newproject()
    const nwele=document.createElement('li');
    nwele.append(data1);
    nwlist.append(nwele);
}
const newproject=async()=>{
    try{
    const config = {headers: {Accept: 'application/json'}}
    const res=await axios.get("https://bikeindex.org:443/api/v3/manufacturers/bca",config)
    d=res.data.manufacturer;
    return `Name :${d.name}  Company URL:${d.company_url}`
    }catch(e){
        return "oops no cycle"
    }
}
button.addEventListener('click',addnewcycle)

const qty=document.querySelector('#qt');
const price=document.querySelector('#pr');
const final=document.querySelector('#total')
price.addEventListener('click',function(){
    const quantity=qty.value;
    const p=price.innerHTML;
    const finalprice=quantity*p;
    const flist=document.createElement('h1')
    flist.append(finalprice);
    final.append(`your total is:`,flist);
})

