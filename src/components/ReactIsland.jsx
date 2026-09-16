import { Mascot } from 'page-mascot'


export default function ReactIsland() {
    return (
        <div style={{ paddingTop: '70px' }}>
            <Mascot
                directions="/mascots/panda-directions.webp"
                reactions="/mascots/panda-reactions.webp"
            />
        </ div>
    )
};