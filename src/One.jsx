import React from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai' ;

function One() {
    const users = [
        {user:'vikram', id:'1', desc:'studied at acharya nagarjuna university'},
        {user:'aditya', id:'2', desc:'studied at acharya nagarjuna university'},
        {user:'raja', id:'3', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
        {user:'gopi', id:'4', desc:'studied at acharya nagarjuna university'},
    ]
  return (
    <div className='outer'>
        {users.map(user => {
            return (
            <div key={user.id} className='card'>
                <div className='cardonediv'>
                    <p className='innercardone'>{user.user}</p>
                    <div >
                        <AiFillEdit className='icon iconpointer' />
                        <AiFillDelete className='iconpointer'/>
                    </div>    
                </div>    
                <p>{user.desc}</p>
            </div>
        )})}
    </div>
  )
}

export default One