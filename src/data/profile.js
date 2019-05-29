const email = 'contact&your-url.com'; //use an ampersand in place of the '@' so spam bots can't grab your email
const profile = {
    name: 'Your Name',
    title: 'Job Title',
    mail: `${email}`,
    website: null,
    linkedin: 'linkedin.com/in/your-name',
    github: 'github.com/your-name',
    imagePath: 'profile.png',
    resume: 'Save-Your-Resume-Here.pdf',
    educationDetails: {
        sectionTitle: '',
        list: [
            { degree: 'Deg 1', school: 'School 1' },
            { degree: 'Deg 2', studies: 'Major', school: 'School 2' }
        ]
    },
    languages: {
        sectionTitle: 'Languages',
        list: [{ name: 'Language 1', level: 'fluent' }, { name: 'Language 2', level: 'intermediary' }]
    },
    interests: {
        sectionTitle: '',
        list: ['Interest 1', 'Interest 2']
    }
};

export default profile;
