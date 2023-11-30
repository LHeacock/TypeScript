
type Experience = {
    title: string,
    location: string,
    summary: string
};

type Skill = {
    skillName: string,
    isCool: boolean;
}

type Interest = {
    interest: string
}

const MY_EXPERIENCE: Experience[] = [
    {
        title: 'Regions Finicial Advisor',
        location: 'Birmingham, AL',
        summary: 'help people budget and look at options'
    },
    {
        title: 'Regions Finicial Advisor',
        location: 'Birmingham, AL',
        summary: 'help people budget and look at options'
    },
    {
        title: 'Regions Finicial Advisor',
        location: 'Birmingham, AL',
        summary: 'help people budget and look at options'
    }
];

const MY_SKILLS: Skill[] = [
    { skillName: 'Sewing', isCool: true },
    { skillName: 'HTML', isCool: false },
    { skillName: 'CSS', isCool: false },
    { skillName: 'Chess', isCool: true }
]

const MY_INTERESTS = [
    { interest: '*horror films' },
    { interest: '*cooking gumbo' },
    { interest: '*dnd' },
];

function displaySKill(skills: Skill[]) {
    skills.forEach(skill => {
        let skill_sentence = '';
        if (skill.isCool == true) {
            skill_sentence += '*BAM: ';

        }
        skill_sentence += skill.skillName;
        console.log(skill_sentence);
    });
}

function displayPosition(experiences: Experience[]) {
    experiences.forEach(experience => {
        console.log(`* ${experience.title} at ${experience.location} - ${experience.summary}`)
    });
}

const sentence = 'liz heacock';
console.log('NAME: ' + sentence.toUpperCase());
console.log('Career: Finicial Advisor ');
console.log('Description: always a little sleepy ');
console.log('My Interests: ')
MY_INTERESTS.forEach(interest => {
    console.log(interest);
});
console.log('My Previous Experience');
displayPosition(MY_EXPERIENCE);
console.log('My Skills: ');
displaySKill(MY_SKILLS);
