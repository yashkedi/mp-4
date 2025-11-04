
const API_KEY=process.env.API_KEY;


export default async function getData(){
    try{
        const res =await fetch(`https://api.bigbookapi.com/search-books?api-key=${API_KEY}&query=books+about+wizards`);
        if (!res.ok) {
            console.error(`HTTP error! Status: ${res.status}`);
            return null;
        }
        return await res.json();

    }catch(err){
        console.error(err);
        return null;
    }
}