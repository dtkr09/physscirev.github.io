const quiz = {
    "What are ionic compounds composed of?": "Cations (positive ions) and anions (negative ions).",
    "What types of elements typically form ionic compounds?": "Metals and non-metals.",
    "How are the ions arranged in an ionic compound?": "In a 3D lattice structure where each positive ion is surrounded by negative ions and vice versa.",
    "Why do ionic compounds have high melting and boiling points?": "Due to strong electrostatic forces of attraction between oppositely charged ions in the lattice.",
    "What is the state of ionic substances at room temperature?": "Solid.",
    "Under what conditions can ionic substances conduct electricity?": "When ions are free to move, such as when dissolved in water or in a molten state.",
    "Why are many ionic substances soluble in water?": "Water can separate the ions in the lattice, allowing them to move freely and dissolve.",
    "What characteristic of ionic substances makes them hard?": "The closely packed 3D lattice structure provides rigidity.",
    "What causes ionic substances to be brittle?": "A shift in the lattice can cause ions of the same charge to align and repel each other, leading to a break.",
    "What happens to the ions in an ionic compound when it melts or dissolves?": "The ions are free to move, allowing the substance to conduct electricity.",
    "Describe the structure of metallic substances.": "A lattice of positively charged metal ions surrounded by a sea of delocalized electrons.",
    "How do metallic substances conduct electricity?": "The delocalized electrons are free to move and carry current throughout the metal.",
    "Why do metals generally have high melting and boiling points?": "Due to strong attractions between metal ions and the sea of electrons.",
    "What properties make metals malleable and ductile?": "The strong but flexible bonds in the lattice allow layers of metal ions to slide over each other.",
    "Why are metals good conductors of heat?": "The tightly packed metal ions allow for rapid transfer of thermal energy.",
    "What is an alloy?": "A mixture of two or more elements, with at least one being a metal, resulting in properties different from the constituent metals.",
    "What are smart alloys?": "Alloys with unique or unusual properties, such as shape memory.",
    "What is corrosion?": "The process of gradual deterioration of metals due to chemical reactions, often with oxygen or moisture.",
    "How does the structure of metals affect their density?": "The ordered lattice structure with closely packed atoms results in high density.",
    "Why do metals conduct electricity and heat effectively?": "The presence of free-moving, delocalized electrons facilitates both electrical and thermal conductivity.",
    "What are molecular substances made of?": "Molecules, which are small particles made up of atoms.",
    "What are the types of molecular structures?": "Diatomic (two atoms), polyatomic (more than two atoms), and macromolecules (many atoms).",
    "What type of bonds hold atoms together in a molecule?": "Covalent bonds.",
    "What are intermolecular forces?": "Weak attractive forces that occur between molecules, influencing their physical properties.",
    "Why do molecular substances generally have low melting and boiling points?": "Because the intermolecular forces between molecules are generally weak.",
    "What determines the solubility of molecular substances in different solvents?": "Polar substances dissolve in polar solvents, and non-polar substances dissolve in non-polar solvents.",
    "Why don't molecular substances conduct electricity?": "They consist of uncharged molecules, which do not allow for free movement of charge.",
    "What are macromolecules?": "Large molecules formed by polymerization, composed of many smaller molecules (monomers) joined together.",
    "What are allotropes?": "Different structural forms of the same element in the same physical state, such as graphite and diamond.",
    "Why are most polymers insoluble?": "Because the intermolecular forces between large polymer molecules are too strong to be overcome by a solvent.",
    "What does hardness refer to in materials?": "The strength of the bonds between the atoms, determining how well an object maintains its shape under pressure.",
    "What does melting point indicate?": "The temperature at which a substance changes from solid to liquid; higher for substances with stronger bonds.",
    "What is thermal conductivity?": "The ability of a substance to transfer heat through the collision and movement of particles.",
    "What is electrical conductivity?": "The ability of a substance to conduct electricity, requiring the presence of free-moving charged particles.",
    "What does density measure?": "The amount of mass per unit volume of a substance.",
    "What is solubility?": "The ability of a substance to dissolve in a solvent.",
    "What does malleability describe?": "The ability of a substance to be shaped or molded without breaking.",
    "What does ductility refer to?": "The ability of a substance to be stretched or drawn out into a wire without breaking.",
    "What defines an alloy?": "A mixture of two or more elements, typically including a metal, with distinct properties.",
    "What is corrosion and why does it occur?": "The gradual destruction of materials, usually metals, due to chemical reactions with the environment."
};

const slide_show_container = document.querySelector('.slideshow-container');

for (const key in quiz) {
    // creation of divs to display card
    const card = document.createElement('div');
    const card_inner = document.createElement('div');
    const card_front = document.createElement('div');
    const card_back = document.createElement('div');
    const slide = document.createElement('div')
    
    // give divs classes
    card.classList.add('card');
    card_inner.classList.add('card-inner');
    card_front.classList.add('card-front');
    card_back.classList.add('card-back');
    slide.classList.add('mySlides')

    // creation of question
    const card_question = document.createElement('h2');
    card_question.textContent = key;
    
    
    // creation of answer
    const card_answer = document.createElement('h2');
    card_answer.textContent = quiz[key];
    

    // adding everything together
    card_front.appendChild(card_question);
    card_back.appendChild(card_answer);
    card_inner.appendChild(card_front);
    card_inner.appendChild(card_back);
    card.appendChild(card_inner);
    slide.appendChild(card);
    slide_show_container.appendChild(slide);

    

    // flip the cards on click
    card_inner.addEventListener('click', function() {
        card_inner.classList.toggle('flip-card');
    });
}
