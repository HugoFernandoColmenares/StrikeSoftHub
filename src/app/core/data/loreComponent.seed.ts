import { GROUP } from "../config/group";

const group = GROUP;

export const answers = [
    {
        question: 'What is softcombat?',
        body: 'A combat sport fought with replica weapons built from foam over a flexible core. The ruleset and the build of the weapons are what keep it safe, which is why fighters need no armour to spar.',
    },
    {
        question: 'Do I need equipment?',
        body: 'Not for a first session. Come in clothes you can move and fall in, and ask at the field about borrowing a weapon.',
    },
    {
        question: 'Do I need to be fit or experienced?',
        body: 'No. Bouts are short and the group runs at the level of whoever is on the field. Most people arrive having never held a boffer.',
    },
    {
        question: 'How do I find you?',
        body: `We are on the field every Sunday at ${GROUP.timeLabel} in ${GROUP.venue}, ${GROUP.city}. Message ${GROUP.instagramHandle} if you want someone to meet you at the entrance.`,
    },
];