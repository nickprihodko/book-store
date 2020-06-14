"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("books", [
      {
        title: "The Institute",
        author: "Stephen King",
        price: 27,
        description: `In the middle of the night, in a house on a quiet street in suburban Minneapolis, intruders silently murder Luke Ellis's parents and load him into a black SUV. The operation takes less than two minutes. Luke will wake up at The Institute, in a room that looks just like his own, except there's no window. And outside his door are other doors, behind which are other kids with special talents--telekinesis and telepathy--who got to this place the same way Luke did: Kalisha, Nick, George, Iris, and ten-year-old Avery Dixon. They are all in Front Half. Others, Luke learns, graduated to Back Half, "like the roach motel," Kalisha says. "You check in, but you don't check out."
        In this most sinister of institutions, the director, Mrs. Sigsby, and her staff are ruthlessly dedicated to extracting from these children the force of their extranormal gifts. There are no scruples here. If you go along, you get tokens for the vending machines. If you don't, punishment is brutal. As each new victim disappears to Back Half, Luke becomes more and more desperate to get out and get help. But no one has ever escaped from the Institute.
        As psychically terrifying as Firestarter, and with the spectacular kid power of It, The Institute is Stephen King's gut-wrenchingly dramatic story of good vs. evil in a world where the good guys don't always win`,
      },
      {
        title: "American Gods",
        author: "Neil Gaiman",
        price: 9.99,
        description: `A master of inventive fiction, Neil Gaiman delves into the murky depths where reality and imagination meet. Now in American Gods, he works his literary magic to extraordinary results.
        Shadow dreamed of nothing but leaving prison and starting a new life. But the day before his release, his wife and best friend are killed in an accident. On the plane home to the funeral, he meets Mr. Wednesday  a beguiling stranger who seems to know everything about him. A trickster and rogue, Mr. Wednesday offers Shadow a job as his bodyguard. With nowhere left to go, Shadow accepts, and soon learns that his role in Mr. Wednesday's schemes will be far more dangerous and dark than he could have ever imagined. For beneath the placid surface of everyday life a war is being fought  and the prize is the very soul of America.`,
      },
      {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "Joanne Rowling",
        price: 13.45,
        description: `When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss...`,
      },
      {
        title: "Harry Potter and the Order of the Phoenix",
        author: "Joanne Rowling",
        price: 9.51,
        description: `Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time...`,
      },
      {
        title: "Harry Potter and the Half-Blood Prince",
        author: "Joanne Rowling",
        price: 10.87,
        description: `When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny...`,
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "Joanne Rowling",
        price: 11.99,
        description: `Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!`,
      },

      {
        title: "Harry Potter and the Deathly Hallows",
        author: "Joanne Rowling",
        price: 18.39,
        description: `As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy...`,
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: "Joanne Rowling",
        price: 11.99,
        description: `Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!`,
      },
      {
        title: "Harry Potter and the Chamber of Secrets",
        author: "Joanne Rowling",
        price: 10.21,
        description: `Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.`,
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  },
};
