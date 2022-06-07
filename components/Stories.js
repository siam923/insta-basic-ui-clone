import {faker} from '@faker-js/faker';
import { useState, useEffect } from 'react';
import Story from './Story';

var genUser = () => ({
  username: faker.internet.userName(),
  avatar: faker.image.avatar(),
})


function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...genUser(),
      id: i
    }))
    setSuggestions(suggestions);
  }, [])

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border rounded-sm 
      border-gray-200 overflow-x-scroll scrollbar-thin scrollbar-thumb-black'  
    >
      {suggestions.map(profile => (
        <Story key={profile.id} img={profile.avatar} username={profile.username}/>
      ))}
    </div>
    );
}

export default Stories;
