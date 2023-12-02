import React, {useState, useEffect} from 'react';

const Api = ()=> {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://reqres.in/api/users")
            .then(data => data.json())
            .then(json => setUsers(json.data));
    },[]);

    console.log({users});

    return(
        <div>
            <h2 className='mt-3 text-center'>Ejemplo de Api</h2>

                {users.map( user => (

                    <div className="card m-auto mt-3" style={{width: "18rem"}}>
                        <img src={user.avatar}  class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name}{user.last_name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">CV</a>
                        </div>
                    </div>
                    
                ))}
        </div>
    )
}

export default Api;