import {person} from "../components/AddPlayers";

const dataExchnage = () => {
    window.$click = () => {
    fetch("http://localhost:8080/person/add", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(person)
    }).then(() => {
        alert('Person Added Successfully!!');
    })
    };
}

export default dataExchnage;