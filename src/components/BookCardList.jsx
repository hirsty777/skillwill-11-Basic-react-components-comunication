import React from 'react'
import BookCard from './BookCard'
import EchoesFromThePast from '../assets/EchoesFromThePast.webp'
import EchoesOfEternity from '../assets/EchoesOfEternity.webp'
import IsleOfllusions from '../assets/IsleOfllusions.webp'
import TheCelestialProphecy from '../assets/TheCelestialProphecy.webp'
import TheClockworkChronicles from '../assets/TheClockworkChronicles.webp'
import TheEnchantedSonata from '../assets/TheEnchantedSonata.webp'
import WhispersInTheMist from '../assets/WhispersInTheMist.webp'

//books data
const data = [
    { id:1, name:"Echoes of Eternity", description:" In a fantastical realm threatened by an ancient curse, four unlikely heroes - a humble blacksmith, a spirited princess, a reclusive mage, and a valiant knight - must embark on a perilous journey to find and wield the legendary Sword of Eternity. As they face dark forces and uncover forgotten prophecies, the fate of their world hangs in the balance.",
    characters:["Marcus Forgewind", "Princess Isabella Serenade", "Arlin Swiftshadow", "Sir Tristan Stoneheart"], 
    image:EchoesOfEternity
    },
    { id:2, name:"The Clockwork Chronicles", description:"Set in a steampunk Victorian era, 'The Clockwork Chronicles' follows the adventures of a resourceful young inventor named Amelia, who uncovers a mysterious plot to sabotage the Great Exhibition. Alongside her trusty automaton companion and a brilliant engineer, she must unravel the conspiracy before it disrupts the progress of their world.",
    characters:["Amelia Hawthorne", "Copper ", "Professor Theodore Kingsleyt"], 
    image:TheClockworkChronicles
    },
    { id:3, name:"Whispers in the Mist", description:"In a secluded town surrounded by an eerie mist, a group of friends stumbles upon a series of cryptic messages that lead them to an ancient secret. As they delve deeper into the mysteries of the mist, they must confront their darkest fears and confront the malevolent entity lurking within.",
    characters:["Emma Sullivan", "Noah Mitchell", "Lily Walker", "Ethan Bennett"], 
    image:WhispersInTheMist
    },
    { id:4, name:"The Enchanted Sonata", description:"In a world where music has magical properties, a gifted young pianist named Clara discovers an enchanted piano that transports her to a realm filled with musical wonders and dangers. To break the enchantment and return home, she must follow a musical quest alongside an enigmatic violinist.", 
    characters:["Clara Morgan", "Viktor Novak"], 
    image:TheEnchantedSonata
    },
    { id:5, name:"The Celestial Prophecy", description:"In a realm where celestial beings walk among mortals, a young orphan named Leo discovers he is the key to an ancient prophecy. As he embarks on a quest to prevent the dark forces from taking over, he must embrace his hidden powers and accept his destiny.",
    characters:["Leo Greyson", "Aria Sunwing"], 
    image:TheCelestialProphecy
    },
    { id:6, name:"Isle of Illusions", description:"On an isolated island shrouded in magic, five strangers find themselves mysteriously drawn together. As they navigate the island's ever-changing illusions and face their inner demons, they must unravel the island's secrets to escape before it's too late.",
    characters:["Oliver Reed", "Penelope Frost", "William Locke", "Isabella Crowe", "Lucas Rivers"], 
    image:IsleOfllusions
    },
    { id:7, name:"Echoes from the Past", description:"When a young historian named Alex unearths a mysterious artifact from an ancient civilization, she inadvertently awakens a dormant evil. With the help of an archaeologist and a seasoned adventurer, she races against time to prevent history from repeating itself and save the world from the approaching darkness.",
    characters:["Alex Turner", "Dr. Evelyn Sinclair", "Nathan Drake"], 
    image:EchoesFromThePast
    }
]

const BookCardList = () => {
  function button(name,characters){
    console.log("Book name: "+name)
    console.log("Characters: "+characters.map((el)=>el))
  }

  return (
    <div className='wrapper'>
      {data.map((el=> <BookCard key={el.id} name={el.name} description={el.description} characters={el.characters} image={el.image} action={button}/>))}
    </div>
  )
}

export default BookCardList