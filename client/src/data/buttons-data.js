import { MdVoicemail } from "react-icons/md";
import { BsBackspace, BsPlus } from "react-icons/bs";
import { VscDebugRestart } from "react-icons/vsc";

const VoiceMail = () => <MdVoicemail />
const BackSpace = () => <BsBackspace />
const Plus = () => <BsPlus />
const Restart = () => <VscDebugRestart />



export const buttonsData = [
    {
        id: 1,
        subtitle: <VoiceMail />,
        title: '1',
        value: '',
        buttonType: 'feedback'
    },
    {
        id: 2,
        subtitle: 'abc',
        title: '2',
        value: 2
    },
    {
        id: 3,
        subtitle: 'def',
        title: '3',
        value: 3
    },
    {
        id: 4,
        subtitle: 'ghi',
        title: '4',
        value: 4
    },
    {
        id: 5,
        subtitle: 'jkl',
        title: '5',
        value: 5
    },
    {
        id: 6,
        subtitle: 'mno',
        title: '6',
        value: 6
    },
    {
        id: 7,
        subtitle: 'pqrs',
        title: '7',
        value: 7
    },
    {
        id: 8,
        subtitle: 'tuv',
        title: '8',
        value: 8
    },
    {
        id: 9,
        subtitle: 'wxyz',
        title: '9',
        value: 9
    },
    {
        id: 10,
        subtitle: '',
        title: <Restart />,
        value: '',
        buttonType: 'reset'
    },
    {
        id: 11,
        subtitle: <Plus />,
        title: '0',
        value: '',
        buttonType: 'feedback'
    },
    {
        id: 12,
        subtitle: '',
        title: <BackSpace />,
        value: '',
        buttonType: 'back'
    }
];